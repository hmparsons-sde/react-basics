import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddStudent from '../views/AddStudent';
import Home from '../views/Home';
import Students from '../views/Students';

export default function Routes({ user, students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={() => <Home user={user} />}
        />
        <Route
          path='/students'
          component={() => <Students students={students} setStudents={setStudents} />}
        />
        <Route
          path='/add-students'
          component={() => <AddStudent setStudents={setStudents} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
  user: PropTypes.any
};
