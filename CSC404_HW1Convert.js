function convert(hw1, hw2, hw3, exam1,exam2){
    // calculate homework grades
    hw1 = hw1 * .10; 
    hw2 = hw2 * .10;
    hw3 = hw2 * .10;
    // calculate exam grades 
    exam1 = exam1 * .35; 
    exam2 = exam2 * .35; 

     // average of 5 student grades  
    var avgGrade = (hw1 + hw2 + hw3 + 
                      exam1 + exam2); 

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




    });
    console.log(avgGrade); 
    console.log(finalLetterGrade);
    return finalLetterGrade; 
