const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return () => {
       return fare * fare
    }
    
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}
function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
   
   
   
   
   
   
   
   
    // if (selectingDrivers == returnFirstTwoDrivers) {
    //     return returnFirstTwoDrivers(drivers);
    // } else if (selectingDrivers == returnLastTwoDrivers) {
    //     return returnLastTwoDrivers(drivers);
    // }
    
}
   


