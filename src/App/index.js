import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../Components/NavBar';
import { getStudents } from '../helpers/data/studentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@gmail.com')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
          students={students}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
// setUser(false) allows us to interact with multiple users & change their statuses.
// Allows us to have multiple states for our user. Null value allows us to do cool UI.
// 3 states for user. 'Null' for onLoad, 'false' for logged out user, 'true' for logged in user.
// NavBar is direct child of App.
// "Raise State" - In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
