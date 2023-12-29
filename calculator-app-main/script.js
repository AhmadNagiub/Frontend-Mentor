window.onload = ()=>{
    if(localStorage.getItem('theme')){
        removeClasses(theme)
        document.querySelector('html').setAttribute('data-theme' , localStorage.getItem('theme'))
        document.getElementById(localStorage.getItem('theme')).setAttribute('class','bg')
    }
}
// Toggle Themes
let theme = document.querySelectorAll('ul li');
for(let i=0; i<theme.length ; i++){
    
    theme[i].addEventListener('click' , ()=>{
        removeClasses(theme)
        if(theme[i].getAttribute('id') == 'theme1'){
            document.querySelector('html').setAttribute('data-theme' , 'theme1')
            theme[i].setAttribute('class' , 'bg')
            localStorage.setItem('theme' , 'theme1');
        }else if(theme[i].getAttribute('id') == 'theme2'){
            document.querySelector('html').setAttribute('data-theme' , 'theme2')
            theme[i].setAttribute('class' , 'bg')
            localStorage.setItem('theme' , 'theme2');
            document.getElementsByTagName('form').style.color='black'
        }
        else{
            document.querySelector('html').setAttribute('data-theme','theme3')
            theme[i].setAttribute('class' , 'bg')
            localStorage.setItem('theme' , 'theme3');
        }
    })
}
let removeClasses =(arr)=>{
    for(let i=0; i<arr.length ; i++){
        arr[i].classList.remove('bg')
    }
}
// ///////////////////////////////////////
let del = ()=>{
    var value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

