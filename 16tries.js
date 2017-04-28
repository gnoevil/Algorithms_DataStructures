var trieNode = function(value) {
  this.value = value;
  this.array = [];
  this.terminalLetter = false;
}

var root = new trieNode("");

// console.log(root.value);
// n1 = new trieNode("a")
// root.array.push(n1);
// n2 = new trieNode("d")
// root.array.push(n2);
// n3 = new trieNode("o");
// n2.array.push(n3);
insertWord("arbitrary");
insertWord("art");
insertWord("artistic");
insertWord("artsy");
// traverse(root);
console.log(contains("arts");

//outputs all letters
function traverse(node){
  console.log(node.value);
  for (var i=0; i < node.array.length; i++){
    traverse(node.array[i])
  }
}


function insertWord(word) {
  var letterIndex = 0;
  var curNode = root;
  while (letterIndex < word.length) {
    var letter = word[letterIndex];
    var letterAlreadyExists = false;
    var letterNode;

    // checks each array value for the letter
    for (var i=0; i < curNode.array.length; i++){
      if (letter == curNode.array[i].value) {
        letterAlreadyExists = true;
        letterNode = curNode.array[i];
      }
    }


    // if the letter is not found we add the letter
    if (!letterAlreadyExists) {
      letterNode = new trieNode(letter);
      curNode.array.push(letterNode);
    }

    // traverse to the next letter
    curNode = letterNode;
    letterIndex++;
  }
  curNode.terminalLetter = true;
}

function contains(word) {
  var letterIndex = 0;
  var curNode = root;
  while (letterIndex < word.length) {
    var letter = word[letterIndex];
    var letterExists = false;
    var letterNode;

    // checks each array value for the letter
    for (var i=0; i < curNode.array.length; i++){
      if (letter == curNode.array[i].value) {
        letterExists = true;
        curNode = curNode.array[i];
        letterIndex++;
        break
      }
    }
    if (letterExists == false) {
      return false;
    }
  }

  if (curNode.terminalLetter == true) {
    return true;
  } else {
    return false;
  }
}

function removeWord(word) {
  var curNode = root;
  var wordIndex = 0;
  var nodeFound;
  var lastNodeToKeep;
  var lastNodeToKeepNextIndex;
  while (wordIndex < word.length) {
    nodeFound = false;
    for (var i=0; i < curNode.array.length; i++){
      if (word[wordIndex] == curNode.array[i].value) {
        nodeFound = true;

        // we set this for later when we want to remove the node
        if (curNode.terminalLetter == true || curNode.array.length > 1) {
          lastNodeToKeep = curNode;
          lastNodeToKeepNextIndex = i;
        }
        curNode = curNode.array[i];
        break
      }
    }
    if (nodeFound == false) {
      return false; //word is not in trie
    }
    wordIndex++;
  }

  // if curNode has children node, we only want to change the flag
  if (curNode.array.length > 0) {
    if (curNode.terminalLetter == true) {
      curNode.terminalLetter = false;
      return true;
    } else {
      return false; // word not in trie
    }
  // if curNode does not have children node we want to remove the nodes
  } else {
    lastNodeToKeep.array.splice(lastNodeToKeepNextIndex,1);
    return true;
  }
}
