var adjList = {
            "A": ["B", "G"],
            "B" : ["A", "E", "D", "C"],
            "C" : ["B", "D"],
            "D": ["B", "C"],
            "E": ["B", "F"],
            "F" : ["E"],
            "G" : ["A"]
    }
var Queue = function() {
  this.arr = []
  this.enqueue = function(val) {
    this.arr.push(val)
    return this;
  }
  this.dequeue = function() {
    return this.arr.shift();
  }
  this.length = function() {
    return this.arr.length
  }
}
// FOR A BREADTH FIRST SEARCH, USE A QUEUE
// this function requires an adjacency list and an origin. End is optional.
function BFS(aList, origin, end){
  var queue = new Queue();
  var tracker = {};
  //start off the tracker with the origin as 0 distance, no previous
  tracker[origin] = [0, null];
  //put the origin in the queue
  queue.enqueue(origin);
  // we haven't found the end point request yet, so mark foundend as false
  var foundend = false;

  // as long as there is something in the queue, pop off the front and refer to it as current.
  while(queue.length() != 0 && foundend == false){
    var current = queue.dequeue();
    // now that we have current, we'll examine its neighbors by referring back to the adjacency list
    // for each neighbor, if it is not already in the tracker, we'll need to put it into the tracker and into the queue
    console.log("current is ", current, " and current's neighbors are", aList[current])
    // if your destination ever gets into the tracker, you're done! You can return back to the user what they asked for.
    // and if the user never provided a destination, you can just continue until the queue is empty


  }
  // tracker is returned, which shows the minimum values from the origin to each data point and the previous data point, excluding any unnecessary data not needed to find our endpoint(if provided)
  return tracker;


}

// FOR A DEPTH FIRST SEARCH, USE A STACK INSTEAD OF A QUEUE

console.log(BFS(adjList, "A"));
