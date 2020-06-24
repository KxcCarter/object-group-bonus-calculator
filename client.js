const employees = [{
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let list = document.getElementById('dataOut');

document.onload = handleClick;

function processBonuses() {
    for (let each of employees) {
        bonusCalc(each);
        let empBonusData = bonusCalc(each);
        let listNode = document.createElement("li");
        list.appendChild(listNode);
    }
}





function bonusCalc(emp) {
    let employeeBonusData = {
        name: emp.name,
    }

    let percentage;
    let salary = parseInt(emp.annualSalary);

    switch (emp.reviewRating) {
        case 1:
            percentage = 0;
            break;
        case 2:
            percentage = 0;
            break;
        case 3:
            percentage = 0.04;
            break;
        case 4:
            percentage = 0.06;
            break;
        case 5:
            percentage = 0.10;
            break;
    }

    if (emp.employeeNumber.length === 4) percentage += 0.05;
    if (salary > 65000 && percentage != 0) percentage -= 0.01;
    if (percentage > 0.13) percentage = 0.13;

    employeeBonusData.bonusPercentage = percentage;
    employeeBonusData.totalBonus = Math.round(salary * percentage);
    employeeBonusData.totalCompensation = salary + employeeBonusData.totalBonus;

    return employeeBonusData;
}



function handleClick() {
    document.getElementById('run').onclick = processBonuses;
}
//This was working because I changed the location of the script tag in index.html. I think I have to find another way to make this work, but for now I'm keeping it where it is.