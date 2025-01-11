const mongoose = require('mongoose');

const clinicalSchema = new mongoose.Schema({
    componentName: {
        type: String,
        required: true
    },
    componentValue: {
        type: String,
        required: true
    },
    measureDateTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
});

const Clinical = mongoose.model('Clinical', clinicalSchema);

module.exports = Clinical;