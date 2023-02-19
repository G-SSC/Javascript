function verificar()
    {
    data = new Date()
    ano = data.getFullYear()
    verfano = document.getElementById("txtidade")
    res = document.querySelector('div#resp')
    if (verfano.value.length == 0|| verfano.value > ano)
        {
        window.alert('[ERRO] Verifique os dados e tente novamente')
        }
    else
        {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(verfano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked)
            {
            genero = 'Homem'
            if(idade > 0 && idade < 12)
                {
                img.setAttribute('src','imagens/menino.jpg')
                }
            else if(idade < 18 )
                {
                img.setAttribute('src','imagens/moço.jpg')
                }
            else if(idade <60 )
                {
                img.setAttribute('src','imagens/homem.jpg')
                } 
            else
                {
                img.setAttribute('src','imagens/velho.jpg')
                }
            }
        else 
            {
            genero = 'Mulher'
            if(idade > 0 && idade < 12)
                {
                img.setAttribute('src','imagens/menina.jpg') 
                }
            else if(idade < 18 )
                {
                img.setAttribute('src','imagens/moça.jpg')
                }
            else if(idade <60 )
                {
                img.setAttribute('src','imagens/mulher.jpg')
                } 
            else
                {
                img.setAttribute('src','imagens/veia.jpg')
                }

            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
        res.appendChild(img)
        }
    }
