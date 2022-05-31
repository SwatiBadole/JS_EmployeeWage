
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
