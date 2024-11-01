function secondWord() {
    inP = document.getElementById('inP1').value.trim().split(' ');
    outP = inP.length > 1 ? inP[inP.length - 2] : 'Недостаточно слов';
    document.getElementById('outP1').textContent = outP;
}

function anagramCheck() {
    str1 = document.getElementById('inP2a').value.toLowerCase().split('').sort().join('');
    str2 = document.getElementById('inP2b').value.toLowerCase().split('').sort().join('');
    outP = str1 === str2 ? 'Анаграммы' : 'Не анаграммы';
    document.getElementById('outP2').textContent = outP;
}

function removeVowels() {
    vowels = 'аеёиоуыэюяaeiou';
    inP = document.getElementById('inP3').value.toLowerCase();
    outP = inP.split('').filter(char => !vowels.includes(char)).join('');
    document.getElementById('outP3').textContent = outP;
}

function genRandomArray() {
    randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101) + 100);
    document.getElementById('outP4').textContent = randomArray.join(', ');
}

function genRandomString() {
    randomString = Array.from({ length: 10 }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('');
    document.getElementById('outP5').textContent = randomString;
}

function countDivThree() {
    randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    divThree = randomArray.filter(num => num % 3 === 0);
    document.getElementById('outP6').textContent = `Случайный массив: ${randomArray.join(', ')}`;
    document.getElementById('outP6').textContent += `\nЭлементов кратных трём: ${divThree.length}, Сумма: ${divThree.reduce((acc, num) => acc + num, 0)}`;
}


function sortArray() {
    randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    sortedArray = randomArray.sort((a, b) => a - b);
    document.getElementById('outP7').textContent = sortedArray.join(', ');
}

function calculateHours() {
    date1 = new Date('1988-08-13T10:00:00');
    date2 = new Date('2033-12-22T17:00:00');
    hours = Math.abs((date2 - date1) / 36e5);
    document.getElementById('outP8').textContent = `Часов: ${Math.floor(hours)}`;
}

function secondsUntilEnd() {
    now = new Date();
    end = new Date();
    end.setHours(23, 59, 59, 999);
    seconds = Math.floor((end - now) / 1000);
    document.getElementById('outP9').textContent = `Секунд: ${seconds}`;
}

function genRandomDates() {
    start = new Date('2000-01-01').getTime();
    end = new Date('2020-01-01').getTime();
    dates = [];
    for (let i = 0; i < 10; i++) {
        const randomDate = new Date(start + Math.random() * (end - start));
        dates.push(randomDate);
    }
    dates.sort((a, b) => a - b);
    minDiff = Infinity;
    closestDates = [];
    for (let i = 0; i < dates.length - 1; i++) {
        diff = Math.floor(Math.abs(dates[i + 1] - dates[i]) / 1000);
        if (diff < minDiff) {
            minDiff = diff;
            closestDates = [dates[i], dates[i + 1]];
        }
    }
    dateStr1 = closestDates[0].toISOString().slice(0, 10);
    dateStr2 = closestDates[1].toISOString().slice(0, 10);
    document.getElementById('outP10').textContent = `Дата 1: ${dateStr1}\nДата 2: ${dateStr2}\nРазница: ${minDiff} секунд`;
}
