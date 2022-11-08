let button = document.getElementsByTagName('button')[0];
button.addEventListener('click',function calculate(){
    let input = document.getElementsByTagName('input')[0].value ;
    let splitValue = input.split(' ');
    console.log(splitValue);  
    let newString = splitValue.join('');
    console.log(newString);
    let l = newString.length ;
    document.getElementsByClassName('output')[0].innerText = l ;
   });

