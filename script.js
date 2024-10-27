const topButtons = document.getElementsByClassName("topBar Buttons button");
const mainBody = document.getElementById("mainFrame")

var texts = [
    "<br /> \xa0\xa0\xa0\xa0 Eae Oi Eae aaa",
    "<br /> \xa0\xa0\xa0\xa0 Em 2023, Anitta denunciou um caso de racismo durante uma viagem à Austrália. Uma mulher fez comentários racistas contra um membro negro da equipe da cantora, e Anitta reagiu de forma firme, repudiando o ato e confrontando a agressora. Ela compartilhou o ocorrido em suas redes sociais, ressaltando a importância de combater o racismo e não se calar diante de injustiças.",
    "<br /> \xa0\xa0\xa0\xa0 Em 21 de maio de 2023, Vinicius Junior foi alvo de racismo por parte de torcedores do Valencia no Estádio Mestalla, casa da equipe. A reação do atacante do Real Madrid, confrontando os responsáveis e criticando o fracasso do futebol espanhol em lidar com a questão - dizendo que “o racismo é normal em LALIGA”, - provocou uma onda global de apoio ao jogador, e ele tem sido uma das principais vozes nessa luta. Em 2023, a lei Vinicius Jr. foi aprovada no Brasil para combater o racismo em eventos esportivos. <br /> <br /> <a href='https://www.espn.com.br/futebol/laliga/artigo/_/id/13686329/vinicius-jr-real-madrid-racismo-casos-linha-do-tempo'> Visitar a noticia </a>",
    "<br /> \xa0\xa0\xa0\xa0 Um entregador que trabalha para aplicativos de serviços de alimentação sofreu agressões verbais e racismo por parte de um morador de um condomínio de casas em Valinhos (SP). Um vídeo mostra o momento em que o homem ofende o profissional e diz que ele tem \"inveja disso aqui\", apontando para a própria pele. Veja acima. <br /> <br /> \xa0\xa0\xa0\xa0 O profissional registrou um boletim de ocorrência para denunciar as agressões e o crime de racismo. O caso aconteceu no dia 31 de julho e as imagens começaram a circular na internet nesta sexta-feira (7). Na ocasião, a Guarda Municipal foi chamada e encaminhou todos para a Delegacia de Valinhos. O condomínio fica no bairro Chácaras Silvania. <br /> [23/10 10:42] caue: Durante a discussão, o rapaz ainda ofende o entregador, o chamando de \"semianalfabeto\"; repete que ele tem inveja da vida que as pessoas que moram no condomínio dele têm; e diz que o profissional não tem onde morar nem \"nunca vai ter\" nada do que ele estava mencionando. O vídeo foi gravado por um vizinho.",
    "<br /> \xa0\xa0\xa0\xa0 Guilherme de Souza Mateus, de 12 anos, sofreu injuria racial ao ser chamado de macaco por um colega de sala. O caso aconteceu em uma escola municipal de Campo Grande, no inicio de março, e acabou viralizando depois do adolescente fazer um desabafo nas redes sociais. <br /> Assim que soube do ocorrido, a professora teria chamado a atenção do aluno dizendo que não aceitava aquilo na escola dela e que não era para ninguém fazer isso. <br /> \"Fiquei uns dois dias sem ir para escola e depois segui em frente. Resolvi voltar porque não era certo eu baixa a cabeça para aquilo\", afirmou o adolescente.",
    "<br /> \xa0\xa0\xa0\xa0 Uma recente notícia sobre racismo destaca o caso de um homem de 75 anos acusado de abuso racial contra um menino de 11 anos durante uma partida de futebol na Escócia. O incidente, ocorrido em Aberdeen, envolve alegações de que o homem entrou no campo e gritou insultos raciais ao garoto. O caso reflete como o racismo ainda afeta crianças e jovens em contextos esportivos, onde discursos de ódio podem ser direcionados a minorias raciais, mesmo em eventos públicos.",
    "<br /> \xa0\xa0\xa0\xa0 A Justiça do Rio de Janeiro condenou Daiane Alcântara Couto de Andrade, conhecida como Day MacCarthy, a 8 anos e 9 meses de prisão por ataques racistas direcionados à filha do casal Bruno Gagliasso e Giovanna Ewbank, Chissomo, conhecida como Titi. O caso se arrastou por sete anos após a denúncia, que foi feita em 2017, quando Titi tinha apenas 4 anos. Os comentários ofensivos foram divulgados em um vídeo na internet, gerando repercussão e indignação. <br /> <br /> <a href='https://g1.globo.com/jornal-nacional/noticia/2024/08/23/justica-condena-influenciadora-que-fez-ataques-racistas-a-filha-de-bruno-gagliasso-e-giovanna-ewbank.ghtml'> Visitar a noticia </a>",
    "<br /> \xa0\xa0\xa0\xa0 Com apenas 8 anos de idade, a filha de Lorhane Abraão Sampaio teve de comparecer diante de uma juíza para denunciar a própria professora. Ela e outra colega da Escola Municipal Estados Unidos, na região central do Rio de Janeiro, dizem ser vítimas de ataques racistas da professora Cristiani Bispo Valeriano. Os episódios teriam ocorrido em mais de uma oportunidade, mas somente na última sexta-feira (7), a professora foi presa em flagrante. <br /><br /> \xa0\xa0\xa0\xa0 A filha de Lorhane tentou retomar a rotina na escola, mas não se sentiu confortável e disse que não quer voltar nunca mais. “Ela foi hoje, mas falou que as crianças ficam o tempo todo perguntando o que está acontecendo. E ela não está conseguindo ficar lá. Eu preciso transferir ela, para que possa focar nos estudos e tentar esquecer o que passou. Sei que não vai ser fácil, a gente vai tentar um acompanhamento médico, um psicólogo fora da escola, porque ela não quer mais estar ali”, disse a mãe da menina. <br /> <br /> <a href='https://agenciabrasil.ebc.com.br/direitos-humanos/noticia/2024-06/menina-de-8-anos-vitima-de-racismo-nao-quer-mais-ir-escola-no-rio'> Visitar a noticia </a>",
    "<br /> \xa0\xa0\xa0\xa0 \"Eu me sinto triste. Minha cor e meu cabelo. Isso dói muito. Eles me xingaram, me humilharam, me chamaram de 'macaca'. Relatou a menina ao site G1 <br /> <br /> \xa0\xa0\xa0\xa0 Os alunos do ensino fundamental da escola teriam jogado terra e fezes de gato no uniforme da menina a vítima diz ainda ter sido chamada de \"cabeça de Bombril\" e \"capacete de astronauta\" <br /> <br /> \xa0\xa0\xa0\xa0  Escola nega racismo e diz que está investigando o caso. <br /> \xa0\xa0\xa0\xa0 Junto à secretaria escolar municipal e a instituição onde ocorreu a agressão da jovem negra, não deram detalhes de quais medidas foram tomadas. Nota a reportagem usa apenas o termo sanções para casos de bullying e racismo. O comunicado também não confirmou quanto os alunos que  estavam envolvidos na agressão. <br /> <br /> <a href='https://www.cartacapital.com.br/sociedade/estudante-negra-e-pisoteada-e-xingada-de-macaca-e-cabelo-de-bombril-por-alunos-em-escola-municipal-de-sp/'> Visitar a noticia </a>",
    "<br /> \xa0\xa0\xa0\xa0 Mortes de mães pretas durante e após o parto se sobressaem em todas as áreas do país. Para pesquisadores, dispidades em 'racismo estrutural, vulnerabilidades interseccionais e desigualdades sociais' <br /> <br /> \xa0\xa0\xa0\xa0 A região Sudeste tem a maior diferença entre a taxa de mortalidade materna para mulheres pretas e brancas de todo o Brasil, segundo pesquisadores da Unicamp. Além disso, os dados apontam que as mortes de mães pretas durante e após o parto se sobressaem em todas as áreas do país, faixas etárias e causas. <br /> <br /> <a href='https://g1.globo.com/sp/campinas-regiao/noticia/2024/07/23/sudeste-tem-maior-diferenca-de-mortes-maternas-entre-mulheres-pretas-e-brancas-diz-estudo.ghtml'> Visitar a noticia </a>",
    "<br /> \xa0\xa0\xa0\xa0 O Alto Comissariado das Nações Unidas para os Direitos Humanos declarou na terça-feira do dia 23/11/2020  que o assassinato de João Alberto Silveira Freitas, um homem negro que morreu espancado por seguranças brancos em uma unidade do Carrefour de Porto Alegre, é um exemplo do \"racismo estrutural\" do Brasil. O órgão da ONU pediu uma investigação independente sobre o caso e reformas urgentes no país <br /> <br /> \xa0\xa0\xa0\xa0 Bolsonaro minimiza racismo <br /> <br /> \xa0\xa0\xa0\xa0 Jair Bolsonaro minimizou o problema do racismo estrutural no Brasil. O presidente brasileiro disse que é \"daltônico\" nesta questão. Já o vice-presidente Hamilton Mourão gerou indignação na sexta-feira (20) quando afirmou que \"não existe racismo\" no Brasil. <br /> \xa0\xa0\xa0\xa0 Embora o Brasil tenha aberto uma investigação sobre a morte de João Alberto, Shamdasani pediu que o inquérito seja \"rápido, exaustivo, independente, imparcial e transparente\". Para ela, é fundamental que se analise se \"os preconceitos raciais desempenharam um papel\" nesse assassinato que aconteceu na véspera de uma data simbólica para o Brasil, o Dia da Consciência Negra, celebrado em 20 de novembro <br /> <br /> \xa0\xa0\xa0\xa0 Onda de indignação <br /> <br /> \xa0\xa0\xa0\xa0 Desde o assassinato, manifestações ganharam as ruas das principais cidades do país, aos gritos de \"Carrefour assassino\" ou \"Carrefour racista\". Os manifestantes lembram que o caso João Alberto não é isolado. Há vários precedentes de violência contra clientes negros nas unidades do Carrefour no Brasil. <br /> <br /> <a href='https://noticias.uol.com.br/ultimas-noticias/rfi/2020/11/24/para-onu-assassinato-brutal-de-joao-alberto-e-exemplo-do-racismo-estrutural-no-brasil.htm'> Visitar a noticia </a> <br /> <a href='https://pt.wikipedia.org/wiki/Assassinato_de_Jo%C3%A3o_Alberto_Freitas'> Visitar a noticia </a> <br /> <a href='https://g1.globo.com/rs/rio-grande-do-sul/noticia/2024/07/21/caso-joao-alberto-justica-retira-qualificadora-de-julgamento-por-morte-de-homem-negro-em-hipermercado.ghtml'> Visitar a noticia </a>"
];

var URLs = [
    "https://eduardomlps.github.io/ProjetoHistoria/",
    "https://eduardomlps.github.io/ProjetoHistoriaSobre/",
    "https://eduardomlps.github.io/ProjetoHistoriaCreditos/"
];

var buttonsClicked = [];

function Click(type, parent, elem, text) {
    switch(type) {
        case 'principal':
            changeURL(URLs[0]);
            break;
        case 'sobre':
            changeURL(URLs[1]);
            break;
        case 'credit':
            changeURL(URLs[2]);
            break;
        case 'menu':
            var element = document.getElementById("menuArea");
            if(!buttonsClicked.includes(element)) {
                buttonsClicked.push(element);
                element.style.display = "block";
            } else {
                element.style.display = "none";
                buttonsClicked.splice(buttonsClicked.indexOf(element), 1)
            }
            break;
        case 'textB':
            if(!buttonsClicked.includes(elem)) {
                buttonsClicked.push(elem);
                elem.innerHTML = "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANZJREFUSEvt081pAlEUhuFHsIcEVBJMmggi9mEDggXYRlZu3KWUECRN+I+C6SGIHBhBYmbmuhBczF0O33zvOe/Mrbnxqd24XwUoNVwpun9FI3zgJ2fUB/TxnrdK0UceYow5etj9KWngEy8YYPIfpAjwiC+8Yo3OGSTKp3jCDF3srwVEPiDfeD6DxPNT+QpveeURTLkHzUxFG0vU0cIiU7ct+pVSAPF+QEJXbBInJg8theWpG5wGDEjo+k0tvxYQ+djggE3pDcsCqYpS+y5yFaBUXaWoVNERTkIfGckggW4AAAAASUVORK5CYII='/>"
                addText(parent, texts[text], 1);
            } else {
                elem.innerHTML = "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL9JREFUSEvt080JwkAQhuE3PQi5e7EHBW1HvAp2IrkLKSQQrCEQCxAFazADEVYh7nzBBQ/JeTLP/G1G4i9LnJ8JiE74r0Z0AE7ANVp2EODtYAccgRZYK4gXyIFz18EcuABL4O7pxAtYrhBp+k6iiAK8kApYAC5EBQyZAXWArIDH0Lh+AdjSB0elAp/Vf01uXSmALVmavwKMuiAF2HZnWvSXswFunjegABa7B0rlFauAt+i3OGXJEzBqAtGfku/gCS9GIhmCfOLGAAAAAElFTkSuQmCC'/>"
                addText(parent, "", 0)
                buttonsClicked.splice(buttonsClicked.indexOf(elem), 1)
            }
    }
}

function addText(elem, text, border) {
    var textArea = elem.getElementsByClassName("ButtonArea")[0];
    textArea.style.borderTop = border+"px solid";
    textArea.innerHTML = text;
}

function changeURL(url) {
    window.location.href = url;
}