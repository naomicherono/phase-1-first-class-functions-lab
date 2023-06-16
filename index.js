// Code your solution in this file!
	
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
  }
  
  const drivers = ["John", "Jane", "Mike", "Emily", "Chris"];
  
  console.log(returnFirstTwoDrivers(drivers)); // Output: ["John", "Jane"]
  console.log(returnLastTwoDrivers(drivers)); // Output: ["Emily", "Chris"]
  console.log(selectingDrivers[0](drivers)); // Output: ["John", "Jane"]
  console.log(selectingDrivers[1](drivers)); // Output: ["Emily", "Chris"]
  console.log(fareDoubler(10)); // Output: 20
  console.log(fareTripler(10)); // Output: 30
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ["John", "Jane"]
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ["Emily", "Chris"]