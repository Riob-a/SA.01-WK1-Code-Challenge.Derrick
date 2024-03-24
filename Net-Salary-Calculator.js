//function that determines Gross income
function grossIncome(basicSalary, benefits){
    const grossAmount = basicSalary + benefits;
    return grossAmount;
}

//Function that defines NHIF rates
function calculateNHIFDeductions(basicSalary, benefits){
    const grosspay = grossIncome(basicSalary, benefits)
        if (grosspay >= 0 && grosspay  <= 5999) {
            return 150;
        } else if (grosspay  >= 6000 && grosspay  <= 7999) {
            return 300;
        } else if (grosspay  >= 8000 && grosspay  <= 11999) {
            return 400;
        } else if (grosspay  >= 12000 && grosspay  <= 14999) {
            return 500;
        } else if (grosspay  >= 15000 && grosspay  <= 19999) {
            return 600;
        } else if (grosspay  >= 20000 && grosspay  <= 24999) {
            return 750;
        } else if (grosspay  >= 25000 && grosspay  <= 29999) {
            return 850;
        } else if (grosspay  >= 30000 && grosspay  <= 34999) {
            return 900;
        } else if (grosspay  >= 35000 && grosspay <= 39999) {
            return 950;
        } else if (grosspay  >= 40000 && grosspay  <= 44999) {
            return 1000;
        } else if (grosspay  >= 45000 && grosspay  <= 49999) {
            return 1100;
        } else if (grosspay >= 50000 && grosspay  <= 59999) {
            return 1200;
        } else if (grosspay  >= 60000 && grosspay  <= 69999) {
            return 1300;
        } else if (grosspay  >= 70000 && grosspay  <= 79999) {
            return 1400;
        } else if (grosspay  >= 80000 && grosspay  <= 89999) {
            return 1500;
        } else if (grosspay >= 90000 && grosspay <= 99999) {
            return 1600;
        } else{
            return 1700;
        }
}

//Function that calculates NSSF deductions
function calculateNSSFDeductions(basicSalary, benefits){
    
    const gross = grossIncome(basicSalary, benefits);
    const nssfDeductions = gross * 0.06;

    return nssfDeductions;
}
//Function that calculates Income tax
function calculateTax(basicSalary, benefits){
//Specifies figures needed to calculate tax
    const gross = grossIncome(basicSalary, benefits);
    const nhif = calculateNHIFDeductions(basicSalary, benefits);
    const nssfDeductions = calculateNSSFDeductions(basicSalary, benefits);
    const taxableincome = gross -(nssfDeductions+nhif);
    return taxableincome; 
}
//Function that calculates net salary
function calculateNetSalary(basicSalary, benefits){
//specifies the figures needed to accomplish net
    const gross = grossIncome(basicSalary, benefits);
    const nhif = calculateNHIFDeductions(basicSalary, benefits);
    const nssfDeductions = calculateNSSFDeductions(basicSalary, benefits);
    const salary = gross - (nhif+nssfDeductions);
//Defining the conditions/limits
    if(salary <=24000){
        return salary * 0.100;
    }else if(salary  <=32333){
        return salary * 0.250;
    }else if(salary <= 500000){
        return salary * 0.300;
    }else if(salary <=800000){
        return salary * 0.325;
    }else{
        return salary * 0.350;
    }
}
//Logs the Net salary after deductions
console.log(calculateNetSalary(50000, 1000))


