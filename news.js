const searchBtn = document.getElementById('searchBtn');
const inputBtn = document.getElementById('inputBtn');
const contentImages = document.querySelectorAll('.img');
const contentTitle = document.querySelectorAll('.Title');
const contentDescription = document.querySelectorAll('.descripation');
const contentLink = document.getElementsByTagName('a');

const apiKey = "38766f931c884527bee5b1764791b3e2"

searchBtn.addEventListener("click",async()=>{
    const inputValue = inputBtn.value;
    const url = `https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${apiKey}`;
    const newslink = await fetch(url)
    const newsData = await newslink.json();
    console.log(newsData);
    let count = 0;
    for(let i=0; i<newsData.articles.length; i++){
        // console.log(newsData.articles[i]);
        contentImages[i].src=newsData.articles[i].urlToImage;
        contentTitle[i].innerHTML =newsData.articles[i].title;
        contentDescription[i].innerHTML =newsData.articles[i].description;
        contentLink[i].href =newsData.articles[i].url;
        count++;
        if(count===9){
            break;
        }
    }
})