function createCalender(year, month) {
    let info = document.getElementById("info");
    let Tabledays = document.getElementById("days");
    let dates = document.getElementById("dates");

    let date = new Date(year, month);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    info.innerText = `${months[date.getMonth() - 1]}, ${year}`;

    days.forEach((element) => {
        let th = document.createElement("th");
        th.innerText += element;
        Tabledays.append(th);
    });

    let firstDay = new Date(year, month - 1, 1).getDay();
    let numberofDays = new Date(year, month, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        let td = document.createElement("td");
        dates.append(td);
    }

    for (let i = 1; i <= numberofDays; i++) {
        let td = document.createElement("td");
        td.innerText += i;
        dates.append(td);
        if ((i + firstDay) % 7 == 0) {
            let tr = document.createElement("tr");
            dates.append(tr);
        }
    }
}

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;

createCalender(currentYear, currentMonth);