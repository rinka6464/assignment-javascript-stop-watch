let inputStr = "";

const display = document.getElementById("display");
const numberBtns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"];
const operatorBtns = [
  { id: "plus",    value: "+" },
  { id: "minus",   value: "-" },
  { id: "times",   value: "*" },
  { id: "divided", value: "/" }];
const pointBtn = document.getElementById("point");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

// 数字ボタンの設定
numberBtns.forEach(function(num) {
    document.getElementById(num).addEventListener("click", function() {
        if (inputStr === "0") {
            return;
        }
        if (num === "00" && inputStr === "") {
           inputStr = "0";
           display.textContent = inputStr;
            return;
        }
        inputStr += num;
        display.textContent = inputStr;
    });
});

// 演算子ボタンの設定
operatorBtns.forEach(function(op) {
    document.getElementById(op.id).addEventListener("click", function() {
        const lastChar = inputStr[inputStr.length - 1];
        if (["+", "-", "*", "/"].includes(lastChar)) {
            return;
        }
        inputStr += op.value;
        display.textContent = inputStr;
    });
});

// 小数点ボタンの設定
pointBtn.addEventListener("click", function() {
    const parts = inputStr.split(/[+\-*/]/);
    const lastParts = parts[parts.length - 1];
    if (lastParts.includes(".")) {
    return;
    }
    inputStr += ".";
    display.textContent = inputStr;
});

// clearボタン設定
clearBtn.addEventListener("click", function() {
    inputStr = "";
    display.textContent = inputStr;
});


// equalボタンの設定
equalBtn.addEventListener("click", function() {
    const answer = eval(inputStr);
    if (answer === Infinity || answer === undefined) {
        display.textContent = "error";
        inputStr = "";
        return;
    }
    inputStr = String(answer);
    display.textContent = inputStr;
});