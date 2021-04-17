import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import addServices from './components/AddServices/AddServices';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import BookList from './components/Dashboard/BookList/BookList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import Review from './components/Dashboard/Review/Review';
import ServiceBuyID from './components/Dashboard/ServiceBuyID/ServiceBuyID';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
export const UserContext = createContext();

function App() {
  const defaultUser = {
    signed: false,
    name: '',
    email: '',
    photo: '',
    message: ''
  }
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/dashboard/addServices" component={addServices} />
          <Route exact path="/dashboard/bookList" component={BookList} />
          <Route exact path="/dashboard/orderList" component={OrderList} />
          <Route exact path="/dashboard/review" component={Review} />
          <Route exact path="/dashboard/addadmin" component={AddAdmin} />
          <Route exact path="/dashboard/book/:_id" component={ServiceBuyID} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;