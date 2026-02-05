const mongoose = require('mongoose');

const repaymentSchema = new mongoose.Schema({
    loanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan',
        required: true
    },
    installmentNumber: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    principalAmount: {
        type: Number,
        required: true
    },
    interestAmount: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    remainingBalance: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'paid', 'partially_paid', 'late'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Repayment', repaymentSchema);
