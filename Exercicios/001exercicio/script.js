
function carregar()
    {
    msg = window.document.getElementById('msg');
    img = window.document.getElementById('img');
    agora = new Date();
    time = 15;
    msg.innerHTML = `Agora são ${time} horas.`;
    if(time>=6 && time<12)
        {
        img.src = 'imagens/dia.jpg'
        document.body.style.background ='rgba(176, 213, 255, 0.473)'
        } 
        else if(time>=12 && time<18)
            {
            img.src = 'imagens/tarde.jpg'
            document.body.style.background ='rgb(206, 104, 9)'
            } 
    }