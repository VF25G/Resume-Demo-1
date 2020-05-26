let pageHtml = document.querySelector("#pageHtml");
let pageStyle = document.querySelector("#pageStyle");

let contentString = `/* 明月别枝惊鹊，清风半夜鸣蝉。
稻花香里说丰年，听取蛙声一片。
七八个星天外，两三点雨山前。
旧时茅店社林边，路转溪桥忽见。
**/
#divVisual{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 秋风清，秋月明，
落叶聚还散，寒鸦栖复惊。
相思相见知何日？此时此夜难为情！
入我相思门，知我相思苦，
长相思兮长相忆，短相思兮无穷极，
早知如此绊人心，何如当初莫相识。
**/
#divVisual{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border:none;
}
/* 梅雪争春未肯降，骚人阁笔费评章。
梅须逊雪三分白，雪却输梅一段香。
**/
#divVisual{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 碧玉妆成一树高，万条垂下绿丝绦。
不知细叶谁裁出，二月春风似剪刀。
**/
#divVisual::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*天街小雨润如酥，草色遥看近却无。
最是一年春好处，绝胜烟柳满皇都。
**/
#divVisual::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`

let formattedString = "";
let n = 0;
let pageScrollHeight = 99999; //尝试用clientHight属性，然而手机Web存在bug，暂且放弃

let stepString = () => {
    setTimeout(() => {
        if(contentString[n] === "\n") {
            formattedString += "<br>";
        } else if (contentString[n] === " ") {
            formattedString += "&nbsp;";
        } else {
            formattedString += contentString[n];
        }

        pageHtml.innerHTML = formattedString;

        if(contentString[n] === "}") {
            pageStyle.innerHTML = contentString.substring(0, n);
        }

        if(n === contentString.length -1) {
            pageStyle.innerHTML = contentString.substring(0, n);
        }
        
        window.scrollTo(0, pageScrollHeight);
        pageHtml.scrollTo(0, pageScrollHeight);

        if (n < contentString.length -1) {
            n += 1;
            stepString();
        }
    }, 30);
}

stepString();