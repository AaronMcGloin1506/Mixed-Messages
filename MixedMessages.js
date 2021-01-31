const mixedMessages = {
    messages: {
        firstMessage: [`How do you sell a deaf man a chicken? *leans in close* YOU WANNA BUY A CHICKEN?!?` , `How do you find Will Smith in the snow? Follow the fresh prints.`, `I used to date a girl with a lazy eye. Turns out she was seeing someone else the whole time.`],
        secondMessage: [`Why did the monkey fall out of the tree? Because it was dead.`, `What's green and has wheels? Grass, I lied about the wheels.`, `I saw this advert in a window that said: “Television for sale, £1, volume stuck on full.” I thought, “I can’t turn that down.”`, `I can swallow two pieces of string and when they come out the other end, they'll be tied together. I shit you knot.`,`What's Forrest Gump's password? 1forrest1`],
        thirdMessage: [`Why do seagulls fly over the sea? Because if they flew over the bay they'd be bagels.`,`My friend entered a pun contest. He entered ten, figuring at least one of them would win, but no pun in ten did`,`What's Harry Potter's favourite method of getting down a hill? Walking... JK, Rolling`,`What did the clock do when it was hungry? It went back four seconds.`],

    },


    generaterandomMessage (option){
        const messageOption = this.messages[option]
        const randNum = Math.floor(Math.random()*messageOption.length)
        return messageOption[randNum];

    },
};

const first = mixedMessages.generaterandomMessage('firstMessage');
const second = mixedMessages.generaterandomMessage('secondMessage');
const third = mixedMessages.generaterandomMessage('thirdMessage');

console.log(`First joke: ${first}`);
console.log(`Second joke: ${second}`);
console.log(`Third joke: ${third}`);
