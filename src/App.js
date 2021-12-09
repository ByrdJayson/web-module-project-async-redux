import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getProfile } from './actions';
function App(props) {
  console.log(props)
  
  useEffect(() => {
    props.getProfile();
  },[]);

  return (
    <div className="App">
      Online Profile Lookup
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    state
  })
}

export default connect(mapStateToProps, { getProfile })(App);