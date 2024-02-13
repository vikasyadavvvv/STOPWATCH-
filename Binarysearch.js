function BinarySearch(arr,target){
    let left=0;
    let right=arr.length-1;

    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            left=mid+1;
        }
        else{
            rigth=mid-1;
        }

    }
    return -1;
}
const array=[1,2,3,4,5,6,7,8,9,0,10];
const targetValue=6;
const result=BinarySearch(array,targetValue)
if(result!==1){
    console.log(`${targetValue} found at index ${result}`)
}
else{
    console.log(`${targetValue} not found`)
}