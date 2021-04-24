import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import StudentForm from '../studentForm';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <div className='App'>
      <StudentForm></StudentForm>
    </div>
  );
}

export default App;
