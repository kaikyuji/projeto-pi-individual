function pegarData(){
    var dataHoraAtual = new Date();

    var dia = dataHoraAtual.getDate();
    var mes = dataHoraAtual.getMonth() + 1; // Os meses vão de 0 a 11
    var ano = dataHoraAtual.getFullYear();

    var horas = dataHoraAtual.getHours();
    var minutos = dataHoraAtual.getMinutes();
    var segundos = dataHoraAtual.getSeconds();
    
    var dataHora = `${ano}/${mes}/${dia} ${horas}:${minutos}:${segundos}`

    return dataHora
}

function validarSessao(){
    if(sessionStorage.EMAIL_USUARIO == undefined || sessionStorage.NOME_USUARIO == undefined || sessionStorage.ID_USUARIO == undefined || sessionStorage.IDADE_USUARIO == undefined){
        alert('Você não está loggado!');
        window.location = '../../login.html'
    }
}

quotes()
function quotes(){
    const quotes = [
        {
        "frase": "Quando você acha que as pessoas morrem?\nQuando tomam um tiro no coração por uma bala de pistola? Não.\nQuando são \"abençoadas\" com uma doença incurável? Não\nQuando elas bebem uma sopa feita de cogumelo envenenado? Não!\nElas morrem quando são esquecidas.",
        "autor": "Dr. Hiluluk",
        "imagem": "https://static.myfigurecollection.net/upload/entries/1/2393-0338b.jpg"
        },
        {
        "frase": "Os sonhos das pessoas... não têm fim!",
        "autor": "Barba Negra",
        "imagem": "https://pm1.aminoapps.com/6112/db5e716bb988dde918ecf0da0ebc6c42f435cfdd_hq.jpg"
        },
        {
        "frase": "Se nós perdemos a credibilidade só por admitir uma falha, então, em primeiro lugar, nunca a tivemos.",
        "autor": "Fujitora",
        "imagem": "https://64.media.tumblr.com/b419bc23e6b0d40b85ca111bfaf9911d/14112f80e17ee88a-43/s540x810/b7a969b1acea8e0c1b89808225a98bdf3f709742.pnj"
        },
        {
        "frase": "Você quer evitar que TODOS morram? Isso é ingênuo. É uma guerra - pessoas morrem.",
        "autor": "Luffy",
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzdW2YffIgXpdhehdZe8t4FSwDI9borvBSJNonPGwLxaqhQ4rNbZ17J6v6iIR7NHJFAk&usqp=CAU"
        },
        {
        "frase": "Justiça irá prevalecer, você disse? Claro que vai! Porém, quem ganhar a guerra se torna a justiça.",
        "autor": "Doflamingo",
        "imagem": "https://i.pinimg.com/474x/99/b0/17/99b017e057b7a8818d74cf02f2fc934e.jpg"
        },
        {
        "frase": "Quando você mira alto, algumas vezes você se depara com lutas que não valem a pena serem lutadas.",
        "autor": "Barba Negra",
        "imagem": "https://pm1.aminoapps.com/6112/db5e716bb988dde918ecf0da0ebc6c42f435cfdd_hq.jpg"
        },
        {
        "frase": "Pare de contar apenas as coisas que você já perdeu! O que foi é passado, não há mais volta! Então pergunte a si mesmo: O que ainda lhe resta?",
        "autor": "Jinbei",
        "imagem": "https://i.pinimg.com/474x/33/f2/e2/33f2e2236f1415f4e479751a146d16d8.jpg"
        },
        {
        "frase": "Todo mundo tem coisas que conseguem e não conseguem fazer. Agora mesmo, eu preciso de você para fazer coisas que não consigo.",
        "autor": "Sanji",
        "imagem": "https://64.media.tumblr.com/6f9614d0ee523260e21962eaf5a1cf72/99385d2b3e6106a7-a4/s250x400/65ae33eff44f1387f1e9f115b8fea08a495383c2.png"
        },
        {
        "frase": "Antes de tudo, queria falar uma coisa: obrigado... eu precisava acender meu cigarro.",
        "autor": "Sanji",
        "imagem": "https://pbs.twimg.com/media/Eyi2caIXMAEPjz7?format=jpg&name=large"
        },
        {
        "frase": "Se eu desistir agora, eu vou me arrepender para sempre.",
        "autor": "Luffy",
        "imagem": "https://64.media.tumblr.com/dff2dc3e738e5949b1f0d4d6731e5fb0/0e423fea7be5c2e0-98/s1280x1920/1a7e48809cec14f0d3f167eaeeb57ff84f04f82e.png"
        },
        {
        "frase": "Eu não quero conquistar nada. É que o homem com mais liberdade nos mares é o Rei dos Piratas!",
        "autor": "Luffy",
        "imagem": "https://animesher.com/orig/1/157/1570/15708/animesher.com_luffy-sanji-roronoa-zoro-1570896.png"
        },
        {
        "frase": "Quando o mundo te empurra, você só tem que se levantar e empurrar de volta. Ninguém vai te salvar se você começar a soltar um monte de desculpas.",
        "autor": "Zoro",
        "imagem": "https://64.media.tumblr.com/e20af23df4dd0273e98e9011ace9dbd9/fd090a5abff1c2af-c7/s1280x1920/fa282ba88e9afef7808eaa3069efbeeb696f3f96.jpg"
        },
        {
        "frase": "Armas são para ações, não ameaças, a partir do momento em que você sacou sua arma, sua vida está em risco.",
        "autor": "Shanks",
        "imagem": "https://pbs.twimg.com/media/FIaUopTVgAAS4SX.jpg"
        },
        {
        "frase": "Eu amo heróis, mas não quero me tornar um! Por exemplo, se você tiver carne, um pirata teria um banquete inteiro com carne, mas um herói seria o cara que dividiria à todos, e eu quero comer tudo!",
        'autor': "Luffy",
        'imagem': "https://i.pinimg.com/236x/a0/7b/9c/a07b9c48829f36ca74d707de2c6f2c4a.jpg"
        },
        {
        "frase": "Conhecendo tanto a derrota quanto a vitória, andando por aí derramando lágrimas, é assim que você se torna um verdadeiro homem. ",
        "autor": "Shanks",
        "imagem": "https://i.pinimg.com/200x/fd/40/f5/fd40f531aa81b43df7b6ac875728ab61.jpg"
        },
        {
        "frase": "Chega um momento em que um homem deve se manter de pé e lutar. Esse momento é quando alguém ri dos sonhos de seus amigos.",
        "autor": "Usopp",
        "imagem": "https://i.pinimg.com/564x/3a/e7/32/3ae73256170d80240d959b065edf2126.jpg"
        },
        {
        "frase": "O que você sabe da morte? Você já morreu? Você acha que a morte preservará sua causa para sempre? A morte não deixa nada para trás! Quando uma pessoa passa, nada resta senão ossos mortos. Se há uma coisa que eu não suporto, é uma pessoa sem respeito pela vida.",
        "autor": "Brook",
        "imagem": "https://i.pinimg.com/564x/cf/e2/74/cfe274168e3c58052d4f0a55c992df43.jpg"
        },
        {
        "frase": "Eu não sei usar espadas, não sei navegar, também não sei cozinhar e não sei mentir, o que eu sei, é que dependo dos meus amigos se quiser continuar vivendo!",
        "autor": "Luffy",
        "imagem": "https://i.pinimg.com/564x/67/b3/26/67b32624b67a0b48cf7632832a299d47.jpg"
        },
        {
        "frase": "Não tente encontrar uma justificativa para o amor de alguém!",
        "autor": "Sengoku",
        "imagem": "https://i.pinimg.com/564x/94/36/69/943669dacee0c0b6d741710b13bfbdf2.jpg"
        },
        {
        "frase": "Não sou o Usopp.",
        "autor": "Sogeking",
        "imagem": "https://i.pinimg.com/originals/2e/cd/6c/2ecd6cd825699b04ae25c99665494c42.jpg"
        },
        {
        "frase": "Um médico! Me ensine a ser um médico! Por favor! Me transforme em um médico! Quero saber medicina! Um médico que possa curar toda e qualquer doença! Um médico que consiga curar esse até mesmo esse país! Porque... porque... não há doença que não possa ser curada!",
        "autor": "Chopper",
        "imagem": "https://img001.prntscr.com/file/img001/pN4zw8q_T-mcdQ0lkdQntg.png"
        },
        {// The things you have destroyed back there were priceless artifacts. Precious treasure whose importance cannot be measured... History may always be repeating itself, but humans cannot go back into the past... you wouldn't understand that, would you?
        "frase": "As coisas que você acabou de destruir lá atrás, eram artigos sem preço. Tesouros preciosos cuja importância não pode nem ser mensurada... A história pode estar sempre se repetindo, mas os humanos não podem voltar ao passado, você não entenderia isso, não é mesmo? ",
        "autor": "Robin",
        "imagem": "https://64.media.tumblr.com/10da8daa30e1950934a880ffd5a7308d/tumblr_plx3l8gEAj1sx8ybdo9_250.pnj"
        }
        
    ]
    let sortedQ = Math.floor(Math.random() * quotes.length)
    const elementsQ = document.querySelectorAll('.dinamicQ') // 0: img || 1: autor || 2: texto
    elementsQ[0].src = quotes[sortedQ].imagem;
    elementsQ[1].textContent = quotes[sortedQ].autor;
    elementsQ[2].textContent = quotes[sortedQ].frase;

}