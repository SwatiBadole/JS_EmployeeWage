//UC5 :Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const IS_PART_TIME = 1;  
const IS_FULL_TIME = 2; 
const PART_TIME_HOURS = 4; 
const FULL_TIME_HOURS = 8; 
const WAGE_PER_HOUR = 20; 
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours (empCheck)
 {
     switch(empCheck)
{
    case IS_PART_TIME:
    return PART_TIME_HOURS;
    case IS_FULL_TIME:
     return FULL_TIME_HOURS;
    default:
     return 0;
}
 }
let empHours = 0;
let totalWorkingDays = 0;
let totalWorkingHours = 0;
while (totalWorkingDays <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) 
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalWorkingHours += getWorkingHours(empCheck);
}
let empWage = totalWorkingHours * WAGE_PER_HOUR;
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

//output:Total Days: 20 Total Hours: 56 Employee wage: 1120