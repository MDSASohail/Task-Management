import  {  useState } from 'react'

function useLocalStorege(key,initialValue) {
    //Function to get value from localStorage..........
  const value=()=>{
    try {
        const valueFormLocalStorege=localStorage.getItem(key);
        return valueFormLocalStorege?JSON.parse(valueFormLocalStorege):initialValue;
    } catch (error) {
        console.log(`No any value with key ${key}`);
        return initialValue;
    }
  }

  const [savedData,setSavedData]=useState(value);

  //Function to get update localStorege.............

  const setValue=(value)=>{
    try {
           const storedValue=value instanceof Function ? value(savedData):value;
           setSavedData(storedValue);
           localStorage.setItem(key,JSON.stringify(storedValue));
    } catch (error) {
        console.log("Error in updating",error);
        
    }
  }

  return [savedData,setValue];
}

export default useLocalStorege