const express = require('express');
const router = express.Router();
const PatientController = require('../Controllers/patientController');

router.post('/', PatientController.create);
router.get('/:id', PatientController.getById);
router.get('/', PatientController.getAll);
router.put('/:id', PatientController.update);
router.delete('/:id', PatientController.delete);

module.exports = router;