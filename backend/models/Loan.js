const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanNumber: {
        type: String,
        unique: true,
        required: true
    },
    borrowerName: {
        type: String,
        required: true
    },
    principalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    interestRate: {
        type: Number,
        required: true,
        min: 0
    },
    interestType: {
        type: String,
        enum: ['fixed', 'declining'],
        required: true,
        default: 'fixed'
    },
    loanDuration: {
        type: Number, // months
        required: true,
        min: 1
    },
    amortizationType: {
        type: String,
        enum: ['equal_installments', 'bullet'],
        required: true,
        default: 'equal_installments'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'closed', 'defaulted'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
