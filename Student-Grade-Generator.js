//Initialization of the main function
function examgrade(grades){
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
 //var created to allow user to enter marks
 let exam = examgrade([80]);
 //command to return the respective grade
 console.log(exam)