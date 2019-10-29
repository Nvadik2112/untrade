'use strict';
const start = document.getElementById("start"),
  cancel = document.getElementById("cancel"),
  plus1 = document.getElementsByTagName("button")[0],
  plus2 = document.getElementsByTagName("button")[1],
  depositCheck = document.querySelector("#deposit-check"),
  additionalIncomeItem = document.querySelectorAll(".additional_income-item"),
  budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
  budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
  expensesMonthValue = document.getElementsByClassName("expenses_month-value")[0],
  additionalIncomeValue = document.getElementsByClassName("additional_income-value")[0],
  additionalExpensesValue = document.getElementsByClassName("additional_expenses-value")[0],
  incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
  targetMonthValue = document.getElementsByClassName("target_month-value")[0],
  salaryAmount = document.querySelector(".salary-amount"),
  expensesItems = document.querySelectorAll(".expenses-items"),
  targetAmount = document.querySelector(".target-amount"),
  periodSelect = document.querySelector(".period-select"),
  additionalExpensesItem = document.querySelector(".additional_expenses-item"),
  incomeItems = document.querySelectorAll('.income-items'),
  periodAmount = document.querySelector('.period-amount'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');


class AppData {
  constructor() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  start() {
    if (salaryAmount.value === '') {
      start.setAttribute.value = ("disabled", 'true');
      return;
    }
    this.budget = +salaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getAdd('addIncome', false);
    this.getAdd('addExpenses', true);
    this.getBudget();
    this.calcPeriod();

    document.querySelectorAll('.data input[type="text"]').forEach((item) => {
      item.disabled = true;
    }, this);
    document.querySelectorAll('.data input[type="checkbox"]').disabled = "true";

    const checkbox = document.querySelector('.data input[type="checkbox"]');

    checkbox.checked = false;
    checkbox.disabled = true;

    plus1.checked = false;
    plus1.disabled = true;

    plus2.checked = false;
    plus2.disabled = true;

    start.style.display = "none";
    cancel.style.display = "block";

    this.showResult();
  }

  reset() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    document.querySelectorAll('input[type="text"]').forEach((item) => {
      item.value = "";
    }, this);

    document.querySelectorAll('.data input[type="text"]').forEach((item) => {
      item.disabled = false;
    }, this);


    const checkbox = document.querySelector('.data input[type="checkbox"]');
    checkbox.checked = true;
    checkbox.disabled = false;

    plus1.checked = true;
    plus1.disabled = false;

    plus2.checked = true;
    plus2.disabled = false;


    start.style.display = "block";
    cancel.style.display = "none";
  }


  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();

  }

  addBlock(item, p, block) {

    const cloneItem = item.cloneNode(true);
    item.parentNode.insertBefore(cloneItem, p);
    const elem = document.querySelectorAll(block);
    cloneItem.querySelectorAll('input').forEach((i) => {
      i.value = '';
    });
    if (elem.length === 3) {
      p.style.display = 'none';
    }
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }


  getExpenses() {
    expensesItems.forEach((item) => {
      const itemExpenses = item.querySelector('.expenses-title').value;
      const cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== ' ' && cashExpenses !== ' ') {
        this.expenses[itemExpenses] = cashExpenses;
      }

    }, this);
  }

  getIncome() {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector('.income-title').value;
      const cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== ' ' && cashIncome !== ' ') {
        this.income[itemIncome] = cashIncome;
      }

    }, this);

    for (const key in this.income) {
      this.incomeMonth += +this.income[key];
      console.log(this.incomeMonth);
    }
  }

  getAdd(add, a) {
    let t;
    if (a) {
      t = additionalExpensesItem.value.split(' ,');
    } else {
      t = additionalIncomeItem;
    }

    t.forEach((item) => {
      const itemValue = (a) ? item.trim() : item.value.trim();
      if (itemValue !== '') {
        this[add].push(itemValue);
      }
    });
  }


  getExpensesMonth() {
    for (const key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }

  }

  getBudget() {
    this.budgetMonth = `${this.budget + this.incomeMonth -
      this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12}`;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
    console.log(this.budgetMonth);
  }


  getTargetMonth() {
    return `${targetAmount.value / this.budgetMonth}`;

  }
  getStatusIncome() {
    if (this.budgetDay >= 800) {
      return ('Высокий уровень дохода');

    } else if (this.budgetDay < 800 && this.budgetDay >= 300) {
      return ('Средний уровень дохода');

    } else if (this.budgetDay < 300 && this.budgetDay > 0) {
      return ('Низкий уровень дохода');

    } else if (this.budgetDay < 0) {
      return ('Что-то пошло не так');
    }

  }

  period() {
    let periodValue;
    periodValue = event.target.value;
    periodAmount.textContent = periodValue;
    incomePeriodValue.value = this.calcPeriod();
  }

  calcPeriod() {
    return `${this.budgetMonth * periodSelect.value}`;
  }

  eventListeners() {
    const _this = this;
    start.addEventListener('click', _this.start.bind(_this));
    cancel.addEventListener('click', _this.reset.bind(_this));
    plus2.addEventListener('click', _this.addBlock.bind(_this, expensesItems[0], plus2, ".expenses-items"));
    plus1.addEventListener('click', _this.addBlock.bind(_this, incomeItems[0], plus1, ".income-items"));
    periodSelect.addEventListener('input', _this.period.bind(_this));

    depositCheck.addEventListener('change', function () {
      if (depositCheck.checked === true) {
        depositBank.style.display = "inline-block";
        depositAmount.style.display = "inline-block";
        _this.deposit = "true";
        depositBank.addEventListener('change', function () {
          console.log(this.options);
          const selectIndex = this.options[this.selectedIndex].value;
          if (selectIndex === 'other') {
            depositPercent.style.display = 'inline-block';
            depositPercent.disabled = false;
            depositPercent.value = '';
          } else {
            depositPercent.style.display = 'none';
            depositPercent.value = selectIndex;
          }
        });
      } else {
        depositBank.style.display = "none";
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        _this.deposit = false;
      }
    });
  }

}
const appData = new AppData();
appData.eventListeners();
