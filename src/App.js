import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyBookings from './components/MyBookings/MyBookings';
import ManageBookings from './components/ManageBookings/ManageBookings';
import AddDestination from './components/AddDestination/AddDestination';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/managebookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/addDestination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
