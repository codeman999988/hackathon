import './App.scss';
import {BrowserRouter as Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import React, {Component} from 'react';
import Header from './components/Header/Header.jsx';
import Employee from './components/Employee/Employee.jsx';
import Hours from './components/Hours/Hours.jsx';
import LineGraph from './components/LineGraph/LineGraph.jsx';
import PieChart from './components/PieChart/PieChart.jsx';
import Projects from './components/Projects/Projects.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import TopPerformer from './components/TopPerformer/TopPerformer.jsx';
import TreeMap from './components/TreeMap/TreeMap.jsx';
import TreeModal from './components/TreeModal/TreeModal.jsx';



class App extends Component {
  state={
    data: null
  }
  
  componentDidMount() {
  axios
  .get('http://localhost:8080/')
  .then(result=>{
    this.setState({
      data: result.data
    })

  })
}
  render () {
  return (
    <div className="App">
      {/* <SideBar />
      <Header /> */}
      <section className="App__top-section">
        {/* <Projects />
        <Employee />
        <Hours /> */}
      </section>
      <section className="App__bot-section">
        {/* <LineGraph /> */}
        <div className="App__bot-right-section">
          <TopPerformer />
          {/* <TreeMap /> */}
        </div>
      </section>
    </div>
  );
}
}

export default App;
