function writeCards(names, eventName) {
    
    const newArr = []
    
    for (let i = 0; i < names.length; i++) {
        const customMsg = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        console.log(customMsg)
        newArr.push(customMsg) 
    }
    
    return newArr 
}

function countDown() {
    let countDown = 11;
    while(countDown > 0){
        countDown--;
        console.log(countDown);
    }
}
