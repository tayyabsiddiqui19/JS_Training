let gradeCalc = function(possibleScore, totalScore) {
    let percentage = (possibleScore / totalScore) * 100
    if (percentage >= 90 && percentage <= 100) {
        return `You got ${percentage} % and you got "A" Grade `
    } 
    else if (percentage >= 80 && percentage <= 89) {
        return `You got ${percentage} % and you got "B" Grade `
    }
    else if (percentage >= 70 && percentage <= 79) {
        return `You got ${percentage} % and you got "C" Grade `
    }
    else if (percentage >= 60 && percentage <= 69) {
        return `You got ${percentage} % and you got "D" Grade `
    }
    else if (percentage >= 50 && percentage <= 59) {
        return `You got ${percentage} % and you are FAILED `
    } else {
        
        return `You are absent`
    }

}
let scoreTotal = gradeCalc(49 , 100)
console.log(scoreTotal);
