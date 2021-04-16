const express = require('express');
const app = express();
const SERVER_PORT = 8080;
const router = express.Router();
const helperfunctionRoutes = require('./routes/helperfunctions.js');
const moment = require('moment')
// const cors = require('cors');
// const commentRoutes = require('./routes/comments.js');
// const bodyParser = require('body-parser');
// const fs = require('fs');
const dataJSON = require('./data/sampledata.json');
moment().format();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())                    
// app.use(cors())
app.use(express.static('/server/public'))


// app.use('/videos', videoRoutes);
// app.use('/helperfunctions', )
console.log(moment(dataJSON[0]['Start Date']).format('LLLL'));


const dataJSONsortId = 
    dataJSON.sort(function(a, b) {
      return a.id - b.id;
    });

const employeeListFunction = (json) =>{
    let empAnswer = []
    json.forEach((obj)=>{
        if(!empAnswer.includes(obj.Employee)){
            let employee = {};
            employee.name = obj.Employee;
            employee.group = obj.Group;
        empAnswer.push(employee)};
    })
    return empAnswer;
}

let employeelist = employeeListFunction(dataJSON);

const avgHoursOfEmployee = (arr, json) =>
{
    let avgHours = [];
    for(i =0; i<arr.length; i++){
        let totalhours = 0;
        let hoursperweek = 0;
        for(j=0; j<json.length; j++){
            if(arr[i].name === json[j].Employee){
                totalhours = totalhours + json[j].Hours;
            };
        }
        let answerobj = {};
        answerobj.name = arr[i].name;
        answerobj.group = arr[i].group;
        answerobj.Hours = totalhours;
        // console.log('TESTTEST',avgHours.find(obj=> obj.name === answerobj.name));
        if(avgHours.find(obj=> obj.name === answerobj.name) === undefined)
        avgHours.push(answerobj);

    }
    const newavgHours = [...new Set(avgHours)];
    // console.log(newavgHours)
    return newavgHours;
}

const AVERAGEhoursperEMP = (start, end, employee) =>{
    let hours = 0
    dataJSON.forEach((obj)=> {
        
        if((moment(obj["Start Date"]).format("X") >= 
        moment(start).format("X")) &&
        (moment(obj["Start Date"]).format("X") <=
        moment(end).format("X")) &&
        (obj["Employee"] === employee) 
        ){
            hours = hours + obj.Hours;

        }
        
        
    } ); 
    console.log('85 HOURS',hours)
   console.log('86 HOURS', ((Math.ceil((Math.abs(moment(start).format('X') - moment(end).format('X')))/60 /60 /24))/7));
   let avghours = hours/((Math.ceil((Math.abs(moment(start).format('X') - moment(end).format('X')))/60 /60 /24))/7);
    return avghours;
    return
}


app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
    // console.log(employeelist);
    // console.log(
    //     dataJSON.sort(function(a, b) {
    //       return a.Id - b.Id;
    //     }));
    // console.log(avgHoursOfEmployee(employeelist, dataJSON));
    // console.log(moment().unix(dataJSON[1]["Start Date"]));
    // console.log(moment().unix(dataJSON[0]["Start Date"]) - moment().unix(dataJSON[1]["Start Date"]))
    // console.log(Math.ceil((Math.abs(moment(dataJSONsortId[0]["Start Date"]).format('X') - moment(dataJSONsortId[1]["Start Date"]).format('X')))/60 /60 /24)/7);
    // console.log(moment(dataJSONsortId[1]["Start Date"]).format('X'));
    // console.log('sortID',dataJSONsortId)
    console.log(AVERAGEhoursperEMP("2021-03-09 00:00:00", "2021-03-17 00:00:00", "CARDONA, CAROLINA"))
});
