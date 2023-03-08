const btn = document.getElementById('btn');
const inputText = document.getElementById('input');
const error = document.getElementById('error');
const numbers = document.getElementById('numbers');
console.log(numbers);

const getBgColor = n =>{
    if(n === 0){
        return 'green';
    }

    if(n === 1){
        return 'yellow';
    }

    for(let i = 2; i * i <= n; i++){
        if(!(n % i)){
            return n % 2 ? 'yellow' : 'green';
        }
    }

    return 'red';
}

const getNumberElement = num =>{
    const p = document.createElement('p');
    p.textContent = num;
    const bgColor = getBgColor(num); 
    if(bgColor === 'yellow'){
        p.style.color = '#444';
    }
    p.style.backgroundColor = bgColor;
    p.className = 'main__numbers__number';
    return p;
}

const helperFun = textcontent =>{
    error.textContent = textcontent;
    numbers.innerHTML = '';
}

btn.addEventListener('click', event =>{
    let intNum = inputText.value;
    if(inputText.value === ''){
        helperFun('Enter a number to generate numbers');
        return;
    }
    
    intNum = parseInt(intNum);
    if(intNum <= 0){
        helperFun('Number must be greater than 0');
    }else if(Boolean(intNum)){
        helperFun('');
        for(let i = 0; i < intNum; i++){
            numbers.appendChild(getNumberElement(i));
        }
    }else{
        helperFun('Value must be a number');
    }

    inputText.value = '';
    inputText.focus();
})