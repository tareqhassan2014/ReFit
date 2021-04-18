import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AddServices from './components/Dashboard/AddServices/AddServices';
import BookList from './components/Dashboard/BookList/BookList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import Review from './components/Dashboard/Review/Review';
import ServiceBuyID from './components/Dashboard/ServiceBuyID/ServiceBuyID';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
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
         
          <PrivateRoute  exact path="/dashboard/addServices">
            <AddServices />
          </PrivateRoute>

          <PrivateRoute  exact path="/dashboard/bookList">
            <BookList />
          </PrivateRoute>
         
          <PrivateRoute  exact path="/dashboard/orderList">
            <OrderList />
          </PrivateRoute>
        
          <PrivateRoute exact path="/dashboard/review">
            <Review />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/addadmin">
            <AddAdmin />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/book/:_id">
            <ServiceBuyID />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;