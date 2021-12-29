
const greetings = ['Hey','Hello','Hi','Whats up','Yo'];
const identifiers = ['friend','you','buddy','pal'];
const phrases = ['you look great!','how have you been?',"isn't it a nice day?","it's good to see you.",];
const sentenceArrays = [greetings,identifiers,phrases,];

const getRandomMessage = nestedArray => {
    let completeSentence = []
    nestedArray.forEach(array => {
         completeSentence.push(array[Math.floor(Math.random() * array.length)]);
    });
    console.log(`${completeSentence[0]} ${completeSentence[1]}, ${completeSentence[2]}`)
};
getRandomMessage(sentenceArrays);