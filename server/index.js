const express = require('express');
const app = express();
const SERVER_PORT = 8080;
const router = express.Router();
const helperfunctionRoutes = require('./routes/helperfunctions.js');
const moment = require('moment')
const cors = require('cors');
// const commentRoutes = require('./routes/comments.js');
// const bodyParser = require('body-parser');
// const fs = require('fs');
const dataJSON = require('./data/sampledata.json');
moment().format();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())                    
app.use(cors())
app.use(express.static('/server/public'))


// app.use('/videos', videoRoutes);
// app.use('/helperfunctions', )
// console.log(moment(dataJSON[0]['Start Date']).format('LLLL'));


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
//     console.log('85 HOURS',hours)
//    console.log('86 HOURS', ((Math.ceil((Math.abs(moment(start).format('X') - moment(end).format('X')))/60 /60 /24))/7));
   let avghours = hours/((Math.ceil((Math.abs(moment(start).format('X') - moment(end).format('X')))/60 /60 /24))/7);
    return avghours;
}

const avgHoursOfEmployee = (arr, json) =>
{
    let avgHours = [];
    for(i =0; i<arr.length; i++){
        let totalhours = 0;
        let hoursperweek = 0;
        let shows = []
        for(j=0; j<json.length; j++){
            if(arr[i].name === json[j].Employee){
                totalhours = totalhours + json[j].Hours;
                shows.push(json[j].Show)
                
            };
        }
        let formattedShows = [...new Set(shows)];
        let answerobj = {};
        let wk1 = AVERAGEhoursperEMP("2021-02-28 00:00:00", "2021-03-06 00:00:00", `${arr[i].name}`);
        let wk2 = AVERAGEhoursperEMP("2021-03-07 00:00:00", "2021-03-13 00:00:00", `${arr[i].name}`);
        let wk3 = AVERAGEhoursperEMP("2021-03-14 00:00:00", "2021-03-20 00:00:00", `${arr[i].name}`);
        let wk4 = AVERAGEhoursperEMP("2021-03-20 00:00:00", "2021-03-26 00:00:00", `${arr[i].name}`);
        let wk5 = AVERAGEhoursperEMP("2021-03-27 00:00:00", "2021-04-03 00:00:00", `${arr[i].name}`);
        answerobj.name = arr[i].name;
        answerobj.group = arr[i].group;
        answerobj.shows = formattedShows;
        answerobj.Hours = totalhours;
        answerobj.avg = totalhours/4.4285172;
        answerobj.wk1 = wk1;

        answerobj.wk2 = wk2;
        answerobj.wk3 = wk3;
        answerobj.wk4 = wk4;
        answerobj.wk5 = wk5;
        // console.log('TESTTEST',avgHours.find(obj=> obj.name === answerobj.name));
        if(avgHours.find(obj=> obj.name === answerobj.name) === undefined)
        avgHours.push(answerobj);

    }
    const newavgHours = [...new Set(avgHours)];
    console.log(newavgHours)
    return newavgHours;
}

const DATA = avgHoursOfEmployee(employeelist, dataJSON);

const EmployeeInfoList = avgHoursOfEmployee(employeelist, dataJSON);
const PerformanceScore = (arr) =>{
    let answerArray=[];
    arr.map((obj) =>{
        let hoursScore = obj.avg;
        let showScore = (obj.shows.length * 4) -4;
        let answer = {};
        
        console.log(obj);
        if(obj.avg >= 63){
            hoursScore = hoursScore - ((obj.avg - 43) * 1.1);
        }
        if(obj.avg >= 55){
            hoursScore = hoursScore -(obj.avg - 43);
        }
        answer.name = obj.name;
        answer.hoursScore = hoursScore;
        answer.showScore = showScore;
        answer.performance = hoursScore + showScore;
        console.log(answer);
        answerArray.push(answer);
    })
    return answerArray;
}

console.log("test");
app.get('/', (req, res)=>{
    res.json(DATA)

})
app.listen(SERVER_PORT, () => {
    console.log(`listening on ${SERVER_PORT}`);
    // console.log('empinfolist',EmployeeInfoList)
    // console.log('PERF SCORES',PerformanceScore(EmployeeInfoList));
    // console.log(
    //     dataJSON.sort(function(a, b) {
    //       return a.Id - b.Id;
    //     }));
    // console.log('avgperemp',avgHoursOfEmployee(employeelist, dataJSON));
    // console.log(moment().unix(dataJSON[1]["Start Date"]));
    // console.log(moment().unix(dataJSON[0]["Start Date"]) - moment().unix(dataJSON[1]["Start Date"]))
    // console.log(Math.ceil((Math.abs(moment(dataJSONsortId[0]["Start Date"]).format('X') - moment(dataJSONsortId[1]["Start Date"]).format('X')))/60 /60 /24)/7);
    // console.log(moment(dataJSONsortId[1]["Start Date"]).format('X'));
    // console.log('sortID',dataJSONsortId)

});

// 28-6 "2021-02-28 00:00:00", "2021-03-06 00:00:00"
// 7-13 "2021-03-07 00:00:00", "2021-03-13 00:00:00"
// 14-20 "2021-03-14 00:00:00", "2021-03-20 00:00:00"
// 20-26 "2021-03-20 00:00:00", "2021-03-26 00:00:00"
// 27-3 "2021-03-27 00:00:00", "2021-04-03 00:00:00"
