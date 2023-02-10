const btn = document.querySelector('#btn');
const getColor = ()=>{
    const randomColor = Math.floor(Math.random()*16777216);
    const randomCode = "#" + randomColor.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById('colorCode').innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);
}
//event call
btn.addEventListener('click',getColor);


async function msg() {
    btn.innerHTML = "Copied"
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Click Me");}, 500);
    });
    btn.innerHTML = await myPromise;
  }
btn.addEventListener('click',msg)
//init call
getColor();