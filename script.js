document.body.addEventListener('keyup', (event)=>{  //Capturar o evento de clique de teclado no site inteiro
    playSound(event.code.toLowerCase()); //{toLowerCase} deixar minusculo
});

document.querySelector('.composer button').addEventListener('click', ()=>{ //Evento de clique no botão Tocar
        let song = document.querySelector('#input').value; //Saber oq foi digitado na sequencia
        console.log("Música",song);

        if(song !== '') { //Verificar se foi tocado algo
            let songArray = song.split(''); //Gerar array com cada letra digitada
            playComposition(songArray);
        }

});


function playSound(sound) { //Função para tocar o som
    let audioElement = document.querySelector(`#s_${sound}`); //Selecionar o arquivo de som correspondente baseado na tecla digitada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);  //adicionar uma tag para deixar a borda selecionada

    if(audioElement) { //Verificar se achou algo
        audioElement.currentTime = 0; //voltar o audio no tempo 0 #resolve o bug do S#
        audioElement.play(); //Função para tocar um som especifico
    }

    if(keyElement) { //Se achou vai ativar a classe do CSS (key.active)
        keyElement.classList.add('active');


        setTimeout(()=>{ // vai esperar 300ms 
            keyElement.classList.remove('active') //Vai remover a borda depois de 300ms
        }, 300);
    }
}

function playComposition(songArray) { //Funçao para tocar a composição criada
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
             playSound(`key${songItem}`);
        }, wait)

        wait += 250; //setanto um tempo para que toque cada tecla no seu tempo e não tudo junto

       
    }
}