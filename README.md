# Mixed-Messages
## Table of Contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code examples](#code-examples)

## General info
This project will generate a random greeting got the user.

## Technologies
* JavaScript
* Node.js v16.13.1

## Setup
```
$ cd ../mixed_Messages
$ node randomMessageGenerator.js
```

## Code examples 
The `getRandomMessage` function takes a nested array and generates a new message.
```javascript
const getRandomMessage = nestedArray => {
    let completeSentence = []
    nestedArray.forEach(array => {
         completeSentence.push(array[Math.floor(Math.random() * array.length)]);
    });
    console.log(`${completeSentence[0]} ${completeSentence[1]}, ${completeSentence[2]}`)
```