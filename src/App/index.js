import React, { useEffect, useState } from 'react';
import StudentCard from '../Components/StudentCard';
import { getStudents } from '../helpers/data/studentData';
import StudentForm from '../studentForm';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Form Title'/>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          setStudents={setStudents}
        />
      ))}
    </div>
  );
}

export default App;
