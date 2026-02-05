const { calculateRepaymentSchedule } = require('../utils/loanCalculator');

const sampleLoanFixed = {
    principalAmount: 10000,
    interestRate: 12, // 12% per year
    loanDuration: 12, // 12 months
    interestType: 'fixed',
    startDate: new Date('2024-01-01')
};

const sampleLoanDeclining = {
    principalAmount: 10000,
    interestRate: 12, // 12% per year
    loanDuration: 12, // 12 months
    interestType: 'declining',
    startDate: new Date('2024-01-01')
};

console.log("--- Testing Fixed Interest ---");
const scheduleFixed = calculateRepaymentSchedule(sampleLoanFixed);
console.log(`Principal: ${sampleLoanFixed.principalAmount}`);
console.log(`Interest Rate: ${sampleLoanFixed.interestRate}%`);
console.log(`Duration: ${sampleLoanFixed.loanDuration} months`);
console.log(`Total Repayment: ${scheduleFixed.reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)}`);
console.log(`Monthly Installment (Month 1): ${scheduleFixed[0].totalAmount}`);
console.log(`Final Balance: ${scheduleFixed[scheduleFixed.length - 1].remainingBalance}`);
console.log("");

console.log("--- Testing Declining Interest (Amortized) ---");
const scheduleDeclining = calculateRepaymentSchedule(sampleLoanDeclining);
console.log(`Principal: ${sampleLoanDeclining.principalAmount}`);
console.log(`Interest Rate: ${sampleLoanDeclining.interestRate}%`);
console.log(`Duration: ${sampleLoanDeclining.loanDuration} months`);
console.log(`Total Repayment: ${scheduleDeclining.reduce((sum, item) => sum + item.totalAmount, 0).toFixed(2)}`);
console.log(`EMI (Month 1): ${scheduleDeclining[0].totalAmount}`);
console.log(`Interest (Month 1): ${scheduleDeclining[0].interestAmount}`);
console.log(`Principal (Month 1): ${scheduleDeclining[0].principalAmount}`);
console.log(`Final Balance: ${scheduleDeclining[scheduleDeclining.length - 1].remainingBalance}`);

// Correctness Check for Declining
// For P=10000, r=0.01 per month, n=12
// EMI = [10000 * 0.01 * (1.1268)] / [0.1268] = 888.48
const expectedEMI = 888.49; // Standard calc
if (Math.abs(scheduleDeclining[0].totalAmount - expectedEMI) < 0.1) {
    console.log("\n✅ Declining Balance EMI matches standard calculation.");
} else {
    console.log(`\n❌ Declining Balance EMI mismatch. Expected ~${expectedEMI}, got ${scheduleDeclining[0].totalAmount}`);
}

// Correctness Check for Fixed
const expectedTotalFixed = 11200;
const actualTotalFixed = scheduleFixed.reduce((sum, item) => sum + item.totalAmount, 0);
if (Math.abs(actualTotalFixed - expectedTotalFixed) < 0.5) {
    console.log("✅ Fixed Interest Total matches standard calculation.");
} else {
    console.log(`❌ Fixed Interest Total mismatch. Expected ${expectedTotalFixed}, got ${actualTotalFixed}`);
}
