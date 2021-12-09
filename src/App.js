import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from './actions';
import Header from './components/Header';
import ProfileForm from './components/ProfileForm';
import Profile from './components/Profile';
function App(props) {
  console.log(props)
  
  useEffect(() => {
    props.getProfile(props);
  },[]);

  return (
    <div className="App">
      <Header/>
      <ProfileForm/>
      <Profile/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    state
  })
}

export default connect(mapStateToProps, { getProfile })(App);