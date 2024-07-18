// Level 1

// Store you first name, last name, age, country, city in your browser localStorage.


// Level 2

// Create a student object. The student object will have first name, last name, age, skills, 
// country, enrolled keys and values for the keys. Store the student object in your browser 
// localStorage.


// Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.


localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'USA');
localStorage.setItem('city', 'New York');

console.log(localStorage.getItem('firstName')); // Output: 'John'
console.log(localStorage.getItem('lastName')); // Output: 'Doe'
console.log(localStorage.getItem('age')); // Output: '30'
console.log(localStorage.getItem('country')); // Output: 'USA'
console.log(localStorage.getItem('city')); // Output: 'New York'


const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript'],
    country: 'USA',
    enrolled: true
  };
  
  localStorage.setItem('student', JSON.stringify(student));
  
  const storedStudent = JSON.parse(localStorage.getItem('student'));
  console.log(storedStudent); // Output: student object

  const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
    
    totalIncome: function() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    
    totalExpense: function() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    
    accountInfo: function() {
      return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nBalance: ${this.accountBalance()}`;
    },
    
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    },
    
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
    
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Adding incomes and expenses
  personAccount.addIncome('Salary', 3000);
  personAccount.addIncome('Freelance', 1500);
  personAccount.addExpense('Rent', 1000);
  personAccount.addExpense('Groceries', 500);
  
  console.log(personAccount.accountInfo()); 
  /*
  Output:
  Name: John Doe
  Total Income: 4500
  Total Expense: 1500
  Balance: 3000
  */
  
  // Create a copy without methods for storage
  const personAccountForStorage = {
    firstName: personAccount.firstName,
    lastName: personAccount.lastName,
    incomes: personAccount.incomes,
    expenses: personAccount.expenses
  };
  
  // Store in localStorage
  localStorage.setItem('personAccount', JSON.stringify(personAccountForStorage));
  
  // Retrieve and reconstruct the object
  const storedPersonAccount = JSON.parse(localStorage.getItem('personAccount'));
  
  // Manually add methods back to the object
  const reconstructedPersonAccount = {
    ...storedPersonAccount,
    totalIncome: personAccount.totalIncome,
    totalExpense: personAccount.totalExpense,
    accountInfo: personAccount.accountInfo,
    addIncome: personAccount.addIncome,
    addExpense: personAccount.addExpense,
    accountBalance: personAccount.accountBalance
  };
  
  console.log(reconstructedPersonAccount.accountInfo());
  