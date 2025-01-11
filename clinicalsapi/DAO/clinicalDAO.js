const Clinical = require('../models/clinical');

class ClinicalDao {
    async create(clinicalData) {
        try {
            const clinical = new Clinical(clinicalData);
            return await clinical.save();
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            return await Clinical.findById(id).populate('patient');
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            return await Clinical.find().populate('patient');
        } catch (error) {
            throw error;
        }
    }

    async update(id, clinicalData) {
        try {
            return await Clinical.findByIdAndUpdate(id, clinicalData, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            return await Clinical.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ClinicalDao();