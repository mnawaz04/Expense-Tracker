const expensesContainer = document.getElementById('expenses');

function addExpense() {
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;

    if (category && !isNaN(amount) && date) {
        const expenseItem = document.createElement('div');
        expenseItem.innerHTML = `<strong>${category}</strong> - $${amount.toFixed(2)} on ${date}`;
        expensesContainer.appendChild(expenseItem);
    } else {
        alert('Please fill in all fields.');
    }
}

