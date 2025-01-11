const PatientDao = require('../DAO/patientDAO');

class PatientController {
    async create(req, res) {
        try {
            const patient = await PatientDao.create(req.body);
            res.status(201).json(patient);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const patient = await PatientDao.getById(req.params.id);
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const patients = await PatientDao.getAll();
            res.status(200).json(patients);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const patient = await PatientDao.update(req.params.id, req.body);
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const patient = await PatientDao.delete(req.params.id);
            if (!patient) {
                return res.status(404).json({ message: 'Patient not found' });
            }
            res.status(200).json({ message: 'Patient deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new PatientController();