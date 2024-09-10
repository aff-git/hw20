
    
// Homework 20 - Credit 

// Боюсь что-либо лишнее удалять, редактировать, т.к. не хочу что-то сломать.
// Просидел часа 4 за этим ДЗ, как вывод - надо подтягивать математику (алгебру).
// В коде присутствуют комментарии и проверки, но на вывод в консоль это не влияет.
// Есть трудности с округлением до 2х знаков после нуля (в случае если сумма кредита = 2000) и математическими вычислениями.

let amount = +prompt('Введите сумму кредита:');
const rate = +prompt('Введите %-тную ставку годовых:');
const term = +prompt('Введите срок кредитования (в месяцах):')
let monthRate = rate / 12;  // годовую ставку делим для получения месячной ставки

//---------------------------------------
//  Задолженность по кредиту

//---------------------------------------
//  Погашение кредита
let creditClosing = amount / term; 
let creditClosing2 = Math.round(creditClosing * 100)/100; // округляем до 2-х цифр после нуля

//---------------------------------------
// Проценты по кредиту
let creditPercentage = amount * monthRate / 100;

let payoutLoan = amount - (amount - creditClosing2); // Задолженность по кредиту 1000 * 0.02% 
let creditDebt = amount - payoutLoan;   // Погашение кредита
// let result =  amount - amount * (term * monthRate / 100);
// let bankProfit = Math.round(amount * (monthRate), 2);   // Проценты по кредиту

//---------------------------------------
// Выплаты в месяц
let monthPayout = Math.round((creditClosing2 + creditPercentage)*100)/100;         

//Итого
let totalAmount = amount;
let totalPercentage = creditPercentage;
let totalPayout = totalAmount + creditPercentage;

//Цикл

for (let i = 0; i < term; i++) {
    console.log(`Месяц: ${i+1} | Задолженность по кредиту: ${amount} | Погашение кредита: ${creditClosing2} | Проценты по кредиту: ${creditPercentage} | Комиссии 0.00 | Выплаты в месяц: ${monthPayout}`);
    // creditDebt = Math.round((creditDebt*100)/100) - (Math.round(creditClosing2));

    amount = amount - creditClosing2;
    amount = (Math.round(amount*100)/100); 


    creditPercentage = Math.round(amount * monthRate)/100;
    monthPayout = creditClosing2 + creditPercentage;

    totalPercentage = totalPercentage + creditPercentage;
    totalPayout = totalAmount + totalPercentage;

}
console.log(`Итого: | Задолженность по кредиту: - | Погашение кредита ${totalAmount} | Проценты по кредиту ${totalPercentage} | Комиссии: 0.00 | Выплаты в месяц: ${totalPayout}`);