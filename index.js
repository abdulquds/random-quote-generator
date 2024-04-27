const quoteBtn=document.getElementById('btn');

const quoteEl = document.getElementById('quote')
const authorEl=document.getElementById('author')
const apiUrl= "https://api.quotable.io/random";
async function getQuiz(){
    try {
        quoteBtn.innerText="Loading..."
        quoteBtn.disabled=true;
        quoteEl.innerText="Updating...";
        authorEl.innerText="Updating...";
        const response= await fetch(apiUrl);
        const data = await response.json();
        const quoteContent=data.content;
        const quoteAuthor=data.author;
        quoteEl.innerText=quoteContent;
        authorEl.innerText="~ " + quoteAuthor;
        quoteBtn.innerText="Get a Quote"
        quoteBtn.disabled=false;
       
    } catch (error) {
        console.log("An Error Happened");
        quoteEl.innerText="An Error Happened, Try Again Later!";
        authorEl.innerText="An Error Happened!"
        quoteBtn.innerText="Get a Quote";
        quoteBtn.disabled=false;
    }
}
quoteBtn.addEventListener('click', getQuiz)