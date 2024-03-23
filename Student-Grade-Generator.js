//Initialization of the main function
function examgrade(grades){
//Using the '.map()' to store the results to a new array
return grades.map(function(grade) {
//Introduction of comditional statements  
   if(grade > 79){
    return "A";
   }else if(grade >= 60 && grade <=79 ){
    return "B";
   }else if(grade >= 49 && grade <=59){
    return "C";
   }else if(grade >= 40 && grade <=49){
    return "D";
   }else{
    return "E";
 }

 });
 }
 //Var created to allow user to enter marks
 let exam = examgrade([]);
 //Logs the result to the console
 console.log(exam)