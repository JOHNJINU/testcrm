import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import {useState} from 'react';

function App() {

  return (
    <BrowserRouter>

        <Navbar />

        <Route exact path="/">
          <Login/>
        </Route>

        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/item" component={ItemDetails} />

      </BrowserRouter>
  );
}

export default App;
