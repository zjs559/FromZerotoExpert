function setCookie(){
    let d = new Date();
    d.setTime(d.getTime()+(24*60*60*1000));
    let expires = "expires="+d.toGMTString();
    document.cookie = "isFirst=fromzerotoexpert;" + expires;
}

// 返回isFirst，如果没有则返回一个空字符串""
function getCookie(){
    let allCookie = document.cookie.split(";");
    for (let i = 0; i < allCookie.length; i++) {
        let cookie = allCookie[i].trim().split("=");
        let key = cookie[0];

        if (key === "isFirst"){
            return cookie;
        }
    }

    return "";
}

function checkCookie(){
    let cookie = getCookie();

    let h1 = document.getElementById("h1");
    if (cookie !== "" && cookie[1] === "fromzerotoexpert"){
        h1.innerText = "嗨，欢迎您再次到 from zero to expert.";
        setCookie();
    }else {
        h1.innerText = "嗨，欢迎您来到 from zero to expert."
        setCookie();
    }
}