// section p1fromVideo
function sayHi(userName) {
userName = prompt('Как тебя зовут?', 'Nobody');
alert(`Привет, ${userName}!`)
}

// section p2fromVideo
 
function action(operation) {
  let a=prompt (`Введите число 1`);
  let b=prompt (`Введите число 2`); 
if (operation==='+') {
    alert(`Результат ${a+b}`);   
}
else if (operation==='-') {
    alert(`Результат ${a-b}`); 
 }
else if (operation==='*') {
    alert(`Результат ${a*b}`); 
 } 
else {
    alert(`Результат ${a/b}`); 
 } 

}

// section p1fromText
function imstudy() {
        console.log(`Я учу JavaScript!`);
    }

  // section p2fromText
function changePhoto(operation) {
    if (operation==='+') {
        let image = document.getElementById("image");
        image.src = 'assets/images/hi_shiba.jpg';
    }
    else {
        let image = document.getElementById("image");
        image.src = 'assets/images/Noberu.jpg';
    }
}

// section ***fromText      => НЕ ДОДЕЛАНО
function check() {
    let year = document.getElementById("year").value;
    if (year % 4 === 0 ) {
        alert(`${year} год високосный`);
        if (year % 100 === 0 ) {
            alert(`${year} год високосный`);           
        }
        else {}
    }
    else {
        alert(`${year} год не високосный`);
    }
}