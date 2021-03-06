// Code your solution in this file!
const returnFirstTwoDrivers = function (cb) {
  return cb.slice(0, 2)
};

const returnLastTwoDrivers = function (cb) {
  return cb.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
  return function (fare) {
    return int * fare
  }
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare)
}

const fetchSpecifiedDrivers = function (drivers, cb){
  return cb(drivers)
}
