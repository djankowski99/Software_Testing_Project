

function convert(avgGrade){
 

    let finalLetterGrade = "F"; 

     // grade scale in intervals of 3 
    var gradeScale = {'A': 93, 'A-': 90,
                      'B+': 87, 'B': 84, 'B-': 81, 
                      'C+': 76, 'C': 73, 'C-': 70, 
                      'D+': 67, 'D': 64, 'D-': 61, 
                      'F': 58}

    Object.keys(gradeScale).some(function (k){
        if(avgGrade >= gradeScale[k]){
            finalLetterGrade = k; 
            return true;
        }
    });
    console.log(finalLetterGrade);
    return finalLetterGrade; 
}

function finalLetterGrade(numberGrade){

}



module.exports.convert = convert

