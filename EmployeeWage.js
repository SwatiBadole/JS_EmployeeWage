<<<<<<< HEAD

//UC6:Storing Daily Wage in a array
function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH =160;
const NUM_OF_WORKING_DAYS= 20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr =new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck =Math.floor(Math.random() * 10) % 3;
    let empHrs = gerWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6-total days :" +totalWorkingDays+"total Hrs:"+totalEmpHrs+"Emp Wage: "+empWage);

//output:Total Days: 20 Total Hours: 84 Employee wage: 1680
=======
console.log("Welcome to Employee wage program.");

//UC 6
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_ABSENT:
            return 0;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        case IS_PART_TIME:
            return PART_TIME_HOURS;
    }
}
let empHours = 0;
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))  //Storing daily wage in array.
}
let empWage = totalWorkingHours * WAGE_PER_HOUR;
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);
>>>>>>> UC6_Store_DailyTotalWage
