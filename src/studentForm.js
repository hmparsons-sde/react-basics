import React, { useState } from 'react';
import addStudent from './helpers/data/studentData';

export default function StudentForm() {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
  };

  return (
    <>
    <div className='student-form'>
    <form id="addStudentForm"
    autoComplete='off'
    onSubmit={handleSubmit}
    >
    <h2>New Student</h2>
    <label>Name: </label>
    <input
    name='name'
    type='text'
    placeholder='Name'
    value={student.name}
    onChange={handleInputChange}
    ></input>
    <label>Teacher: </label>
    <input
        name='teacher'
        type='text'
        placeholder='Teacher'
        value={student.teacher}
        onChange={handleInputChange}
    ></input>
    <label>Grade: </label>
    <input
        name='grade'
        type='number'
        placeholder='Grade'
        value={student.grade}
        onChange={handleInputChange}
    ></input>
    <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}
