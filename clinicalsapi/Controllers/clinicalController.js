const ClinicalDao = require('../DAO/clinicalDAO');

class ClinicalController {
    async create(req, res) {
        try {
            const clinical = await ClinicalDao.create(req.body);
            res.status(201).json(clinical);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const clinical = await ClinicalDao.getById(req.params.id);
            if (!clinical) {
                return res.status(404).json({ message: 'Clinical record not found' });
            }
            res.status(200).json(clinical);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const clinicals = await ClinicalDao.getAll();
            res.status(200).json(clinicals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const clinical = await ClinicalDao.update(req.params.id, req.body);
            if (!clinical) {
                return res.status(404).json({ message: 'Clinical record not found' });
            }
            res.status(200).json(clinical);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const clinical = await ClinicalDao.delete(req.params.id);
            if (!clinical) {
                return res.status(404).json({ message: 'Clinical record not found' });
            }
            res.status(200).json({ message: 'Clinical record deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ClinicalController();