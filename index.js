
const greetings = ['Hey','Hello','Hi','Whats up','Yo'];
const identifiers = ['friend','you','buddy','pal'];
const phrases = ['you look great!','How have you been?',"isn't it a nice day?","it's good to see you.",];
const sentenceArrays = [greetings,identifiers,phrases,];

const getRandomMessage = nestedArray => {
    nestedArray.forEach(array => {
        let component = array[Math.floor(Math.random() * array.length)];
        console.log(component)
    });
};
getRandomMessage(sentenceArrays)