// Express routes
const router = require('express').Router();

//Import models
let db = require('../db/db');
let { students, tests } = db;

// Get Tests
router.get('/', function(req, res, next) {
  res.json({ tests });
});

// Get Top Scoring Student
router.get('/top', function(req, res, next) {
  // reduce array of tests
  let topScore = tests.reduce((prev, current, idx) => {
    return prev.score > current.score ? prev : current;
  });
  // find assoc student
  let validictorian = students.filter(
    student => student.id === topScore.studentId
  );

  res.json({ validictorian });
});

// Get Test by Id
router.get('/:id', function(req, res, next) {
  let test = tests.filter(test => test.id === +req.params.id);
  res.json({ test });
});

// Get Mean Score for Student
router.get('/:id/mean', function(req, res, next) {
  let studentTests = tests.filter(test => test.studentId === +req.params.id);
  let total = studentTests.reduce((acc, test, idx) => {
    return acc + test.score;
  }, 0);
  let mean = total / (studentTests.length + 1);
  res.json({ mean });
});

// Add Score
router.post('/', function(req, res, next) {
  let newId = tests.length + 1;
  let test = {
    id: newId,
    score: req.body.score,
    studentId: req.body.studentId,
    subject: req.body.subject,
  };
  tests.push(test);
  res.json({ tests });
});

// Delete Score
router.delete('/:id', function(req, res, next) {
  let newScores = tests.filter(score => score.id != req.params.id);
  tests = newScores;
  res.json({ tests });
});

// Update Score
router.put('/:id', function(req, res, next) {
  let updatedScore = tests.filter(score => score.id === +req.params.id)[0];
  updatedScore.score = req.body.score;
  updatedScore.studentId = req.body.studentId;
  updatedScore.subject = req.body.subject;
  tests[req.params.id] = updatedScore;
  res.json({ tests });
});



module.exports = router;
