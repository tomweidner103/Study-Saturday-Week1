// Express routes
const router = require('express').Router();

let tests = [
  { id: 0, subject: 'Physics', score: 99, studentId: 0 },
  { id: 1, subject: 'English', score: 78, studentId: 1 },
  { id: 2, subject: 'Math', score: 90, studentId: 3 },
  { id: 3, subject: 'English', score: 55, studentId: 3 },
  { id: 4, subject: 'Physics', score: 88, studentId: 4 },
];

// Get Tests
router.get('/', function(req, res, next) {
  res.json({ tests });
});

// Get Test by Id
router.get('/:id', function(req, res, next) {
  let test = tests.filter(test => test.id === +req.params.id);
  res.json({ test });
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
