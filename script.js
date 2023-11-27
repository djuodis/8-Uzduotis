var tabsElements = document.getElementsByClassName('tab')
var buttons = document.querySelectorAll('button')



tabsElements[0].style.display = 'block'
buttons[0].classList.add('active')

// Paspaudimo funkcija  
function changeTab (id, event) {

    // Tab keitimas
    for (var tab of tabsElements) {
        tab.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'

    //Mygtukų stilizavimas per klasę
    for(var button of buttons){
        button.classList.remove('active')
    }
    event.currentTarger.classList.add('active')  
    
    
}