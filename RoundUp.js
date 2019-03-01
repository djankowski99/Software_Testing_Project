function Round_Up(attendance, grade){
    if(attendance >= 4){
        grade += 0.1;
    }
    if(attendance >= 4 && grade % .5 == 0 && grade % 10 != 0){
        grade = Math.round(grade);
    }
    else{
        grade -= .1;
    }
    return grade;
}
module.exports.Round_Up = Round_Up