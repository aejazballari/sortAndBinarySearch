// bubble sort
let a = [10, 100, 500, 20, 40];
const bubbleSort = (arr) => {
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (a[j] > a[j + 1]) {
        tmp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(a));

//binary search
let b = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 42, 47, 53];
const binarySearch = (arr, target) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === arr[middleIndex]) {
      return "Your target found at index " + middleIndex;
    }
    if (target > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    if (target < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return "Target not found";
};

console.log(binarySearch(b, 21));

//Merge sort
const c = [89, 14, 37, 90, 42, 56, 78, 13, 9];
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let res = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      res.push(left[leftIndex]);
      leftIndex++;
    } else {
      res.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
console.log(mergeSort(c));
