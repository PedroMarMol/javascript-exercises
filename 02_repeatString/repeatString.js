const repeatString = function(string, num) {
    let stringSum = "";
    if(num < 0){ 
        stringSum = "ERROR";
    }   else {
            for (let i = 0; i < num; i++){
                stringSum += string;
            }
        }
    return stringSum;
};

// Do not edit below this line
module.exports = repeatString;
