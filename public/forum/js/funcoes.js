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
        }
    ]
    let sortedQ = Math.floor(Math.random() * quotes.length)
    const elementsQ = document.querySelectorAll('.dinamicQ') // 0: img || 1: autor || 2: texto
    elementsQ[0].src = quotes[sortedQ].imagem;
    elementsQ[1].textContent = quotes[sortedQ].autor;
    elementsQ[2].textContent = quotes[sortedQ].frase;

}