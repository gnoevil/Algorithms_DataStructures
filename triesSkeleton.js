var TrieSet = function(){
	this.root = new TrieNode("");
	this.insert = function(string){
    //This function will go through the given string, starting off with just the first letter and then growing it letter by letter.
    // Each substring it creates will be its own node and be a child of the node before it
    //When it gets to the end of a given string, that final node will hold the entire string and will be marked as a Word.
    // If anything new was added to the Trie, we'll return true
    // If nothing new was added to the Trie, we'll return false.

		if(string.length < 1) {
			return false;
		}
    // start off our boolean here to note we haven't added any new nodes yet
    	var inserting = false;

    // Might be a good idea to standardize your strings
    var lowerstring = string.toLowerCase();

    // start off at the root
		var current = this.root;
    //Now we'll slice our string, adding one letter at a time to the substring
		for(var i=1; i<=lowerstring.length; i++){
			var substring = lowerstring.slice(0, i);
      // if the node doesn't have this substring as a child, we'll have to make it
			if(!current.children[substring]){
				current.children[substring] = new TrieNode(substring);
        // if we're making a new node, we'll note that by flipping our boolean to true
				inserting = true;
			}
      // now that we know for sure our current node has a child with our desired substring, we'll make that child our current
			current = current.children[substring];
		}
    // Now that we're at the end of the word, we'll mark our current node as a Word (unless it's for some reason the root)
		if (current != this.root){
			current.isWord = true;
		}
		if(inserting){
      // Now we'll return true if we actually made new nodes
			return true
		}
    // If no new nodes were made, we'll return false.
		return false;
	}

	this.contains = function(string){
    // This is an extremely useful function that will return whether the given string exists in your Trie and, if it does, the node that contains it.
		var lowerstring = string.toLowerCase();
		var current = this.root;
		var i=1;
		var substring = lowerstring[0];
		while(current.children[substring] && i<=lowerstring.length){
			current = current.children[substring];
			i++;
			substring = lowerstring.slice(0,i)
		}
		if(current.val == lowerstring){
			return {'found': true, 'current': current};
		}
		return {'found':false, 'current': current};
	}

  this.autocomplete = function(string){

    // to do an autocomplete, you can jump to the node that contains the given string (if it exists) by using the contains function
		var contained = this.contains(string);
		// YOUR CODE GOES HERE
    console.log("Predict the word the user is intending to type!")

	}

	this.first = function(){
		// Just for fun, this will find the first word alphabetically in the Trie
		return this.root.first();
	}
	this.last = function(){
		// YOUR CODE GOES here
    console.log("Find the last word alphabetically in the Trie")
	}
}

var TrieNode = function(val){
  this.val = val;
  this.isWord = false;
  this.children = {};

	this.first = function(){
		// If this node contains a word, return it
		if(this.isWord){
			return this.val;
		}
		var min = "z";
    // look at the children and look only at the last letter, pick out the first alphabetical from those
		for(var key in this.children){
			if(key.slice(key.length-1, key.length)<=min){
				minnode = this.children[key];
				min = key.slice(key.length-1, key.length)
			}
		}
		return minnode.first();
	}
}

var howard = new TrieSet();
console.log(howard.insert("squid"));
console.log(howard.insert("apple"));
console.log(howard.insert("snapple"));
console.log(howard.insert("app"));
console.log(howard.insert("aardvark"));
console.log(howard.insert("zebra"));
console.log(howard.insert("zamboni"));
console.log(howard.insert("zither"));
console.log("Does howard contain squid?", howard.contains("squid"));
console.log("Does howard contain ze?", howard.contains("ze"));
console.log("Does howard contain app?", howard.contains("app"));
console.log("Does howard contain kangaroo?", howard.contains("kangaroo"));

console.log("Finding the first alphabetical", howard.first());
