const router = require('express').Router();
const Lection = require('../models/lection.model');

router.route('/').get((req, res) => {
  Lection.find()
    .then((lections) => res.json(lections))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const lectionTopic = req.body.lectionTopic;
  const lecturers = req.body.lecturers;
  const studentsGroup = req.body.studentsGroup;
  const classNo = Number(req.body.classNo);
  const duration = Number(req.body.duration);

  const newLection = new Lection({
    lectionTopic,
    lecturers,
    studentsGroup,
    classNo,
    duration,
  });

  newLection.save()
    .then(() => res.json('Lection added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Lection.findById(req.params.id)
    .then((lection) => res.json(lection))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Lection.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lection deleted.'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
