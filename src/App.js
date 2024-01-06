import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NewsCard from './Components/NewsCard/NewsCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_APIKEY;

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({ progress: progress })
  }
  render() {
    
    return ( 
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
           
          />
          <Routes>
            <Route exact path="/NewsExpress" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='general' country="in" pageSize={this.pageSize} category='general' />} />
            <Route exact path="/NewsExpress/business" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='business' country="in" pageSize={this.pageSize} category='business' />} />
            <Route exact path="/NewsExpress/entertainment" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='entertainment' country="in" pageSize={this.pageSize} category='entertainment' />} />
            <Route exact path="/NewsExpress/health" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='health' country="in" pageSize={this.pageSize} category='health' />} />
            <Route exact path="/NewsExpress/science" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='science' country="in" pageSize={this.pageSize} category='science' />} />
            <Route exact path="/NewsExpress/sports" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='sports' country="in" pageSize={this.pageSize} category='sports' />} />
            <Route exact path="/NewsExpress/technology" element={<NewsCard  setProgress ={this.setProgress } apiKey={this.apiKey }  key='technology' country="in" pageSize={this.pageSize} category='technology' />} />
          </Routes>
        </Router>
      </div >
    )
  }

}
