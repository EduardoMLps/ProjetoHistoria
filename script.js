const topButtons = document.getElementsByClassName("topBar Buttons button");
const mainBody = document.getElementById("mainFrame")

var texts = [
    "<br /> \xa0\xa0\xa0\xa0 Eae Oi Eae aaa",
    "<br /> \xa0\xa0\xa0\xa0 Em 2023, Anitta denunciou um caso de racismo durante uma viagem à Austrália. Uma mulher fez comentários racistas contra um membro negro da equipe da cantora, e Anitta reagiu de forma firme, repudiando o ato e confrontando a agressora. Ela compartilhou o ocorrido em suas redes sociais, ressaltando a importância de combater o racismo e não se calar diante de injustiças.",
    "<br /> \xa0\xa0\xa0\xa0 Em 21 de maio de 2023, Vinicius Junior foi alvo de racismo por parte de torcedores do Valencia no Estádio Mestalla, casa da equipe. A reação do atacante do Real Madrid, confrontando os responsáveis e criticando o fracasso do futebol espanhol em lidar com a questão - dizendo que “o racismo é normal em LALIGA”, - provocou uma onda global de apoio ao jogador, e ele tem sido uma das principais vozes nessa luta. Em 2023, a lei Vinicius Jr. foi aprovada no Brasil para combater o racismo em eventos esportivos. <br /> <br /> <a href='https://www.espn.com.br/futebol/laliga/artigo/_/id/13686329/vinicius-jr-real-madrid-racismo-casos-linha-do-tempo'> Visitar a noticia </a>",
    "<br /> \xa0\xa0\xa0\xa0 Um entregador que trabalha para aplicativos de serviços de alimentação sofreu agressões verbais e racismo por parte de um morador de um condomínio de casas em Valinhos (SP). Um vídeo mostra o momento em que o homem ofende o profissional e diz que ele tem \"inveja disso aqui\", apontando para a própria pele. Veja acima. <br /> <br /> \xa0\xa0\xa0\xa0 O profissional registrou um boletim de ocorrência para denunciar as agressões e o crime de racismo. O caso aconteceu no dia 31 de julho e as imagens começaram a circular na internet nesta sexta-feira (7). Na ocasião, a Guarda Municipal foi chamada e encaminhou todos para a Delegacia de Valinhos. O condomínio fica no bairro Chácaras Silvania. <br /> [23/10 10:42] caue: Durante a discussão, o rapaz ainda ofende o entregador, o chamando de \"semianalfabeto\"; repete que ele tem inveja da vida que as pessoas que moram no condomínio dele têm; e diz que o profissional não tem onde morar nem \"nunca vai ter\" nada do que ele estava mencionando. O vídeo foi gravado por um vizinho.",
    "<br /> \xa0\xa0\xa0\xa0 Guilherme de Souza Mateus, de 12 anos, sofreu injuria racial ao ser chamado de macaco por um colega de sala. O caso aconteceu em uma escola municipal de Campo Grande, no inicio de março, e acabou viralizando depois do adolescente fazer um desabafo nas redes sociais. <br /> Assim que soube do ocorrido, a professora teria chamado a atenção do aluno dizendo que não aceitava aquilo na escola dela e que não era para ninguém fazer isso. <br /> \"Fiquei uns dois dias sem ir para escola e depois segui em frente. Resolvi voltar porque não era certo eu baixa a cabeça para aquilo\", afirmou o adolescente.",
    "<br /> \xa0\xa0\xa0\xa0 Uma recente notícia sobre racismo destaca o caso de um homem de 75 anos acusado de abuso racial contra um menino de 11 anos durante uma partida de futebol na Escócia. O incidente, ocorrido em Aberdeen, envolve alegações de que o homem entrou no campo e gritou insultos raciais ao garoto. O caso reflete como o racismo ainda afeta crianças e jovens em contextos esportivos, onde discursos de ódio podem ser direcionados a minorias raciais, mesmo em eventos públicos."
];

var buttonsClicked = [];

function Click(type, parent, elem, text) {
    switch(type) {
        case 'sobre':
            console.log(mainBody)
            mainBody.innerHTML = "ssssssssssss";
            break;
        case 'credit':
            mainBody.innerHTML = "cccccccccccc";
            break;
        case 'textB':
            if(!buttonsClicked.includes(elem)) {
                buttonsClicked.push(elem);
                addText(parent, texts[text]);
            } else {
                addText(parent, "")
                buttonsClicked.splice(buttonsClicked.indexOf(elem), 1)
            }
    }
}

function addText(elem, text) {
    var textArea = elem.getElementsByClassName("ButtonArea")[0];
    textArea.innerHTML = text;
}