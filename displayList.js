function displayList(list){
  var current = list.head;
  while(current){
    console.log(current.val);
    current = current.next;
  }
}
