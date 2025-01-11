const Patient = require('../models/patient');

class PatientDAO {
    async create(patientData) {
        try {
            const patient = new Patient(patientData);
            return await patient.save();
        } catch (error) {
            throw new Error('Error creating patient: ' + error.message);
        }
    }

    async getById(patientId) {
        try {
            return await Patient.findById(patientId).populate('clinicals');
        } catch (error) {
            throw new Error('Error fetching patient: ' + error.message);
        }
    }

    async update(id, updateData) {
        try {
            return await Patient.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            throw new Error('Error updating patient: ' + error.message);
        }
    }

    async delete(id) {
        try {
            return await Patient.findByIdAndDelete(id);
        } catch (error) {
            throw new Error('Error deleting patient: ' + error.message);
        }
    }

    async getAll() {
        try {
            return await Patient.find().populate({ path: 'clinicals', strictPopulate: false });
        } catch (error) {
            throw new Error('Error listing patients: ' + error.message);
        }
    }
}

module.exports = new PatientDAO();