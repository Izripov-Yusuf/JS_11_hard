'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelectorAll('.income-title'),
    additionalIncomeFirst = document.querySelectorAll('.additional_income-item')[0],
    additionalIncomeSecond = document.querySelectorAll('.additional_income-item')[1],
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    incomeAmount = document.querySelectorAll('.income-amount'),
    expensesAmount = document.querySelectorAll('.expenses-amount'),
    inputPlaceholderNumber = document.querySelectorAll('.data [placeholder = "Сумма"]'),
    inputPlaceholderName = document.querySelectorAll('.data [placeholder = "Наименование"]');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function inputNum() {
  for (let i = 0; i < inputPlaceholderNumber.length; i++) {
    inputPlaceholderNumber[i].value = inputPlaceholderNumber[i].value.replace(/[^0-9]/, '');
  }
}
function inputText() {
  for (let i = 0; i < inputPlaceholderName.length; i++) {
    inputPlaceholderName[i].value = inputPlaceholderName[i].value.replace(/[^а-яА-Я,.!?"';: ]/, '');
  }
}

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  incomeMonth: 0,
  strExpenses: '',
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  start: function () {

    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();

    // appData.asking();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    periodSelect.addEventListener('change', appData.calcPeriod);
    appData.calcPeriod();
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.childNodes[1].value = '';
    cloneExpensesItem.childNodes[3].value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    inputPlaceholderNumber = document.querySelectorAll('.data [placeholder = "Сумма"]');
    inputPlaceholderName = document.querySelectorAll('.data [placeholder = "Наименование"]');
    for (let i = 0; i < inputPlaceholderNumber.length; i++) {
      inputPlaceholderNumber[i].addEventListener('input', inputNum);
    }
    for (let i = 0; i < inputPlaceholderName.length; i++) {
      inputPlaceholderName[i].addEventListener('input', inputText);
    }

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },
  addIncomeBlock: function () {
    let cloneIncomesItem = incomeItem[0].cloneNode(true);
    cloneIncomesItem.childNodes[1].value = '';
    cloneIncomesItem.childNodes[3].value = '';
    incomeItem[0].parentNode.insertBefore(cloneIncomesItem, incomePlus);
    incomeItem = document.querySelectorAll('.income-items');
    inputPlaceholderNumber = document.querySelectorAll('.data [placeholder = "Сумма"]');
    inputPlaceholderName = document.querySelectorAll('.data [placeholder = "Наименование"]');
    for (let i = 0; i < inputPlaceholderNumber.length; i++) {
      inputPlaceholderNumber[i].addEventListener('input', inputNum);
    }
    for (let i = 0; i < inputPlaceholderName.length; i++) {
      inputPlaceholderName[i].addEventListener('input', inputText);
    }


    if (incomeItem.length === 3) {
      incomePlus.style.display = 'none';
    }
  },
  getExpenses: function() {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = +cashExpenses;
    }
    });
  },
  getIncome: function () {
    incomeItem.forEach(function (item) {
      let itemExpenses = item.querySelector('.income-title').value;
      let cashExpenses = item.querySelector('.income-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.income[itemExpenses] = +cashExpenses;
      }
    });

    for (let key in appData.income){
      appData.incomeMonth += +appData.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !== ''){
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function () {
    let sum = 0;
    for (let key in appData.expenses) {
      sum += appData.expenses[key];
    }
    appData.expensesMonth = sum;
    return sum;
  },
  getBudget: function () {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
  },
  getStatusIncome: function () {
    if (appData.budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
    } else if ((appData.budgetDay >= 600) && (appData.budgetDay <= 1200)) {
      return ('У вас средний уровень дохода');
    }
    else if (appData.budgetDay < 0) {
      return ('Что то пошло не так');
    }
    else if (appData.budgetDay < 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      appData.percentDeposit = +prompt('Какой годовой процент?', 10);
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = +prompt('Какой годовой процент?', 10);
      }
      appData.moneyDeposit = +prompt('Какая сумма заложена', 10000);
      while (!isNumber(appData.percentDeposit)) {
        appData.percentDeposit = +prompt('Какая сумма заложена', 10000);
      }
    }
  },
  changeRange: function (event) {
    periodSelect.value = event.target.value;
    periodAmount.textContent = periodSelect.value;
  },
  calcPeriod: function () {
    incomePeriodValue.value = appData.budgetMonth * periodSelect.value;
  }
};

start.addEventListener('click', function (event) {
  event.preventDefault();
  if (salaryAmount.value === '') {
    alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
  } else {
    appData.start();
  }
});

/* console.log(searchNewIncome()); */

expensesPlus.addEventListener('click', appData.addExpensesBlock);

incomePlus.addEventListener('click', appData.addIncomeBlock);

periodSelect.addEventListener('change', appData.changeRange);

incomeTitle[1].addEventListener('input', function () {
  incomeTitle[1].value = incomeTitle[1].value.replace(/[^а-яА-Я,.!?"';: ]/, '');
});

additionalIncomeItem[0].addEventListener('input', function () {
  additionalIncomeItem[0].value = additionalIncomeItem[0].value.replace(/[^а-яА-Я,.!?"';: ]/, '');
});

additionalIncomeItem[1].addEventListener('input', function () {
  additionalIncomeItem[1].value = additionalIncomeItem[1].value.replace(/[^а-яА-Я,.!?"';: ]/, '');
});

expensesTitle.addEventListener('input', function () {
  expensesTitle.value = expensesTitle.value.replace(/[^а-яА-Я,.!?"';: ]/, '');
});

additionalExpensesItem.addEventListener('input', function () {
  additionalExpensesItem.value = additionalExpensesItem.value.replace(/[^а-яА-Я,.!?"';: ]/, '');
});

salaryAmount.addEventListener('input', function () {
  salaryAmount.value = salaryAmount.value.replace(/[^0-9]/, '');
});

incomeAmount[0].addEventListener('input', function () {
  incomeAmount[0].value = incomeAmount[0].value.replace(/[^0-9]/, '');
});

expensesAmount[0].addEventListener('input', function () {
  expensesAmount[0].value = expensesAmount[0].value.replace(/[^0-9]/, '');
});

targetAmount.addEventListener('input', function () {
  targetAmount.value = targetAmount.value.replace(/[^0-9]/, '');
});







/* console.log(appData.budget);
console.log('Расходы за месяц: ', appData.expensesMonth);

console.log('Накопится за месяц: ', appData.budgetMonth);

if (appData.getTargetMonth() > 0) {
  console.log('Цель достигнется за: ', appData.getTargetMonth());
} else {
  console.log('Цель не будет достигнута');
}

console.log('Бюджет на день: ', appData.budgetDay);

console.log('Уровень дохода: ', appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + 'свойство ' + key + ' значение ' + appData[key]);
}


console.log(appData.addExpenses.substring(0, appData.addExpenses.length - 1)); */