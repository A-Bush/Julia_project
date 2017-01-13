function cocktail(array){

  var left = 0;
  var right = array.length - 1;

  do{
    for (var i = left; i < right; i++) {
      if(array[i] > array[i+1]){
        array[i] = array[i] + array[i+1];
        array[i+1] = array[i] - array[i+1];
        array[i] = array[i] - array[i+1];
      }
    }
    right--;

    for (var i = right; i > left; i--) {
      if(array[i] < array[i-1]){
        array[i] = array[i] + array[i-1];
        array[i-1] = array[i] - array[i-1];
        array[i] = array[i] - array[i-1];
      }
    }
    left++;
  } while(left <= right);

console.log('cocktail sort');
  return array;
}

function buble(array){
  do {
    var flag = false;
    for (var i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]){
        array[i] = array[i] + array[i+1];
        array[i+1] = array[i] - array[i+1];
        array[i] = array[i] - array[i+1];
        flag = true;
      }
    }
  } while(flag);
  console.log('buble sort');
  return array;
}



function createArr(size){
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random()*1000);
  }
  return arr;
}


function test(a, func){

  var start = new Date().valueOf();
  var result = func(a);
  var end = new Date().valueOf();
  console.log(end - start + ' seconds done');
  return result;

}
