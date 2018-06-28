'use strict';

//let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;              
}

function quickSort(array, start=0, end=array.length) {
  if (start >= end) {
    return array;            
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;          
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  //console.log('this is mid', middle);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  //console.log(array);
  return merge(left, right, array);
}

function merge(left, right, array=[]) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  // 1 2 3 4       5 6 7 8

  //1 2 3 4 
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }

  return array;
}

//console.log(mergeSort(data));


//BUCKET SORT
//create a second array to be a place holder 
//holding the numbers in related buckets
//then sort the buckets and unload them back into the array


//let data = [89, 30, 25, 32, 17, 72];

//Create a helper function to sort the buckets
//looks similar to what Terrance had, similar to curriculum's swap
function sortBuckets(array){
  for(let i = 0; i<array.length; i++){
    var temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

function bucketSort(array, max, min){
//Creating the buckets
  let bucketRange = 5;
  let bucketCount = Math.floor((max - min) / bucketRange) + 1;

  let allBuckets = new Array(bucketCount);

//Putting the numbers into the right buckets
  array.forEach(num =>{
    allBuckets[Math.floor((num - min)/bucketRange)].push(num);
  });

//Sorting buckets, created a new array to throw numberes into
  array.length = 0;

  allBuckets.forEach(bucket =>{
    //insert
    bucket.forEach(element => array.push(element));
  });

//Completed sorted 
  return array;

}

//[25, 89]
//[25, 30]

// min: newArray[0] = 25
// max: newArray[newArray.length-1]

//if i < max 
//i = 0
//j = newArray.length

// if i+ > [0] push




//get mid-point from lowest and highest 






/*
 let data = [30, 89, 25, 32, 72];

function bucketSort(arr){
  let newArr = [];
  newArr[0] = 25;

  for (let i = 0; i < arr.length - 1; i++) {
     if (arr[i] >= newArr[i]) {
       if (arr[i] <= newArr[i - 1]) {
        let prevVal = newArr[i - 1];
        newArr[i - 1] = arr[i];
        newArr[i + 1] = prevVal;
       }

       newArr[i + 1] = arr[i];
     } 
  }

  
  
  return newArr;
}

*/