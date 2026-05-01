const fortunes =[
    "大吉　素敵な出会いがあるかも！",
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "最凶　もう外出は諦めよう"
];

const button=document.getElementById("よーし！")
const result=document.getElementById("はいー！")

button.addEventListener("click",function(){
    const randomNumber=Math.floor(Math.random()*fortunes.length);   
    const resultText = fortunes[(randomNumber)];

    result.textContent=fortunes[(randomNumber)];

    if (resultText.includes("大吉")) {
        result.style.color = "red";
    }else if (resultText.includes("吉")) {
        result.style.color = "white";
    }else if (resultText.includes("最凶")) {
        result.style.color = "orange";
    }
});