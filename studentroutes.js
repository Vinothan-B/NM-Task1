const express = require('express');
const router = express.Router();

let students = [
  {
    id: 1,
    name: "Mohan",
    dept: "CSE",
    age: 20,
    year: 3,
    email: "mohan@gmail.com",
    phone: "9876543210",
    city: "Chennai"
  },
  {
    id: 2,
    name: "Nithish",
    dept: "ECE",
    age: 21,
    year: 4,
    email: "nithish@gmail.com",
    phone: "9876501234",
    city: "Coimbatore"
  }
];

router.get('/', (req, res) => {
  res.json(students);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(students.find(s => s.id === id));
});

router.post('/', (req, res) => {
  const data = req.body;

  if (Array.isArray(data)) {
    students.push(...data);
  } else {
    students.push(data);
  }

  res.status(201).json({
    message: "Student(s) added successfully",
    students
  });
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  students = students.map(student =>
    student.id === id ? { ...student, ...req.body } : student
  );

  res.json({
    message: "Student updated successfully",
    students
  });
});

router.put('/', (req, res) => {
  const updates = req.body;

  updates.forEach(update => {
    students = students.map(student =>
      student.id === update.id ? { ...student, ...update } : student
    );
  });

  res.json({
    message: "Students updated successfully",
    students
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(student => student.id !== id);

  res.json({
    message: "Student deleted successfully",
    students
  });
});

router.delete('/', (req, res) => {
  const ids = req.body;
  students = students.filter(student => !ids.includes(student.id));

  res.json({
    message: "Students deleted successfully",
    students
  });
});

module.exports = router;
