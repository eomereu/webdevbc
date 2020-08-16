function myForEach(arr, func){
  //loop through the array
  for(var i = 0; i < arr.length; i++){
    //call func for each item
    func(arr[i]);
  }
}

Array.prototype.myForEach = function(func) {
  //loop through the array
  for(var i = 0; i < this.length; i++){
    //call func for each item
    func(this[i]);
  }

}