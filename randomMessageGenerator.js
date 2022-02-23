
const greetings = ['Hey','Hello','Hi','Whats up',];
const identifiers = ['friend','you','buddy','pal'];
const phrases = ['you look great!','how have you been?',"isn't it a nice day?","it's good to see you.",];
const sentenceArrays = [greetings,identifiers,phrases,];
let loadText = document.querySelector('.greeting');
let refreshButton = document.querySelector('.refresh')

const getRandomMessage = nestedArray => {
    let completeSentence = []
    nestedArray.forEach(array => {
         completeSentence.push(array[Math.floor(Math.random() * array.length)]);
    });
    return `${completeSentence[0]} ${completeSentence[1]}, ${completeSentence[2]}`;
};

//initial greeting
loadText.innerText = getRandomMessage(sentenceArrays)

//refresh greeting button
refreshButton.addEventListener('click', () => {
    let oldText = loadText.innerText
    let newText = getRandomMessage(sentenceArrays);
    if(newText === oldText){
        newText = getRandomMessage(sentenceArrays);
        loadText.innerText = newText;
    } else {loadText.innerText = newText}
})


