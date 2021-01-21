import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import PeopleDetailPage from './Pages/PeopleDetailPage';
import PeopleListPage from './Pages/PeopleListPage';
import StartPage from './Pages/StartPage';

function App() {
  return (
    <div>
      
      <Switch>
        
        <Route path="/people/:id" component={PeopleDetailPage}/>
        <Route path="/people" component={PeopleListPage}/>
        <Route path="/" component={StartPage}/>

      </Switch>
    </div>
  );
}

export default App;
