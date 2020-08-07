var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    answer = prompt("Are we there yet?");
    if(answer.indexOf("maybe") !== -1) {
      answer = prompt("Yes or no?");
    }
}
alert("YAY, We made it!");