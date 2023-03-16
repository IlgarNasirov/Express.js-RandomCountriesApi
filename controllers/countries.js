const fs=require('fs/promises');
const path=require('path');

const p=path.join(path.dirname(require.main.filename), 'data', 'countries.json');

exports.getCountries=async(request, response, next)=>{
    try{
        const countries= JSON.parse(await fs.readFile(p));
        const questionAnswer=countries[Math.floor(Math.random()*countries.length)];
        const answers=[];
        while(answers.length!==5){
        const random=Math.floor(Math.random()*countries.length);
        if(countries[random].name!==questionAnswer.name){
            const check=answers.find(value=>value===countries[random].name);
            if(check===undefined){
                answers.push(countries[random].name);
            }
        }
    }
    const random=Math.floor(Math.random()*5);
    answers[random]=questionAnswer.name;
    response.status(200).json({
        question: questionAnswer.imageUrl,
        answers: answers,
        correctAnswer: questionAnswer.name
    });
    }
    catch(error){
        next(error);
    }
    
}