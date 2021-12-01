
function darkmode()
{
    let linkText=document.querySelectorAll('a');
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('h1').style.color='white'
    document.querySelector('h1').style.borderBottom= '5px solid white'
    document.querySelector('div').style.borderLeft= '5px solid white'
    document.querySelector('ol').style.color='white'

    linkText[0].style.color='lightblue'
    linkText[1].style.color='lightblue'
    linkText[2].style.color='lightblue'

    document.querySelector('div').style.color='white';
}

function lightmode()
{
    let linkText=document.querySelectorAll('a');
    document.querySelector('body').style.backgroundColor = 'white'
    document.querySelector('h1').style.color='black'
    document.querySelector('h1').style.borderBottom= '5px solid black'
    document.querySelector('div').style.borderLeft= '5px solid black'
    document.querySelector('ol').style.color='black'

    linkText[0].style.color='red'
    linkText[1].style.color='red'
    linkText[2].style.color='red'

     document.querySelector('div').style.color='black';
}


