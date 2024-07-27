document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpenses = document.getElementById('total-expenses');
    const filterDate = document.getElementById('filter-date');
    
    let expenses = [];

    function renderExpenses(expensesToRender) {
        expenseList.innerHTML = '';
        expensesToRender.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = `${expense.date} - ${expense.description}: $${expense.amount}`;
            expenseList.appendChild(li);
        });
    }

    function updateTotal() {
        const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
        totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        const expense = { amount, description, date };
        expenses.push(expense);

        renderExpenses(expenses);
        updateTotal();

        form.reset();
    }

    function handleFilterChange() {
        const selectedDate = filterDate.value;
        if (selectedDate) {
            const filteredExpenses = expenses.filter(expense => expense.date === selectedDate);
            renderExpenses(filteredExpenses);
        } else {
            renderExpenses(expenses);
        }
    }

    form.addEventListener('submit', handleFormSubmit);
    filterDate.addEventListener('change', handleFilterChange);
});
