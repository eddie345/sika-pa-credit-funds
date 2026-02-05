/**
 * Generates a repayment schedule for a loan.
 * 
 * @param {Object} loanData
 * @param {number} loanData.principalAmount - Original loan amount
 * @param {number} loanData.interestRate - Annual interest rate (percentage)
 * @param {number} loanData.loanDuration - Duration in months
 * @param {string} loanData.interestType - 'fixed' or 'declining'
 * @param {Date} loanData.startDate - Starting date of the loan
 * @returns {Array} List of repayment objects
 */
function calculateRepaymentSchedule(loanData) {
    const { principalAmount, interestRate, loanDuration, interestType, startDate } = loanData;
    const schedule = [];
    const start = new Date(startDate || Date.now());

    if (interestType === 'fixed') {
        // Fixed Interest (Simple Interest)
        const annualRate = interestRate / 100;
        const totalInterest = principalAmount * annualRate * (loanDuration / 12);
        const totalToRepay = principalAmount + totalInterest;
        const monthlyInstallment = totalToRepay / loanDuration;
        const monthlyPrincipal = principalAmount / loanDuration;
        const monthlyInterest = totalInterest / loanDuration;

        let balance = principalAmount;

        for (let i = 1; i <= loanDuration; i++) {
            balance -= monthlyPrincipal;
            const dueDate = new Date(start);
            dueDate.setMonth(start.getMonth() + i);

            schedule.push({
                installmentNumber: i,
                dueDate: dueDate,
                principalAmount: Number(monthlyPrincipal.toFixed(2)),
                interestAmount: Number(monthlyInterest.toFixed(2)),
                totalAmount: Number(monthlyInstallment.toFixed(2)),
                remainingBalance: Number(Math.max(0, balance).toFixed(2))
            });
        }
    } else if (interestType === 'declining') {
        // Declining Balance (Amortized / Reducing Balance)
        const monthlyRate = interestRate / 12 / 100;

        // EMI Formula: [P * r * (1 + r)^n] / [(1 + r)^n - 1]
        const emi = (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, loanDuration)) /
            (Math.pow(1 + monthlyRate, loanDuration) - 1);

        let remainingBalance = principalAmount;

        for (let i = 1; i <= loanDuration; i++) {
            const interestForMonth = remainingBalance * monthlyRate;
            const principalForMonth = emi - interestForMonth;
            remainingBalance -= principalForMonth;

            const dueDate = new Date(start);
            dueDate.setMonth(start.getMonth() + i);

            schedule.push({
                installmentNumber: i,
                dueDate: dueDate,
                principalAmount: Number(principalForMonth.toFixed(2)),
                interestAmount: Number(interestForMonth.toFixed(2)),
                totalAmount: Number(emi.toFixed(2)),
                remainingBalance: Number(Math.max(0, remainingBalance).toFixed(2))
            });
        }
    }

    return schedule;
}

module.exports = { calculateRepaymentSchedule };
