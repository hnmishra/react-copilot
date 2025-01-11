const express = require('express');
const router = express.Router();
const ClinicalController = require('../Controllers/clinicalController');

router.post('/', ClinicalController.create);
router.get('/:id', ClinicalController.getById);
router.get('/', ClinicalController.getAll);
router.put('/:id', ClinicalController.update);
router.delete('/:id', ClinicalController.delete);

module.exports = router;