const getColor = ()=>{
    const randomColor = Math.floor(Math.random()*16777216);
    const randomCode = "#" + randomColor.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById('colorCode').innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById('btn').addEventListener('click',getColor);

//init call
getColor();