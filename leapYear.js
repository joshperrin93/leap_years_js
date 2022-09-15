let LeapYear

let leapYear = (year) => {
    if (((year % 4) === 0) && ((year % 10) !== 0)) {
        return true
    } else if (((year % 100) === 0) && ((year % 400) !== 0)) {
        return false
    } else if ((year % 400) === 0) {
        return true
    } else {
        return false
    }
}

let findLeapYears = (startYear, endYear) => {
    const allYears = []
    for(let years = startYear ; years <= endYear ; years++) {
        allYears.push(years)
    }
    return allYears.filter(leapYear)
}

let closestLeapYear = (year) => {
    if (leapYear(year)) {
        return year
    } else if (leapYear(year - 1)) {
        return (year - 1)
    } else if (leapYear(year + 1)) {
        return (year + 1)
    } else if ((leapYear(year + 2)) && (leapYear(year - 2))) {
        return [(year - 2), (year + 2)]
    } else if (leapYear(year - 2)) {
        return (year - 2)
    } else if (leapYear(year + 2)) {
        return (year + 2)
    } else if (leapYear(year - 3)) {
        return (year - 3)
    } else if (leapYear(year + 3)) {
        return (year + 3)
    } else {
        return [(year - 4), (year + 4)]
    }
}

// console.log(leapYear(2000)) //true
// console.log(leapYear(1700)) //false
// console.log(leapYear(1800)) //false
// console.log(leapYear(1900)) //false
// console.log(leapYear(2004)) //true
// console.log(leapYear(2008)) //true
// console.log(leapYear(2012)) //true
// console.log(leapYear(2009)) //false
// console.log(leapYear(2010)) //false
// console.log(leapYear(2011)) //false

// console.log(findLeapYears(1680, 1720))

console.log(closestLeapYear(1900))

// All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
// All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
// All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
// All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)
