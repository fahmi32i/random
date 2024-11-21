var quotes = [
    { text: "“Be careful about reading health books. Some fine day you'll die of a misprint.”", author: "― Markus Herz" },
    { text: "“An eye for an eye will only make the whole world blind.”", author: "― Mahatma Gandhi" },
    { text: "“I speak to everyone in the same way, whether he is the garbage man or the president of the university.”.", author: "― Albert Einstein" }
  ];
  

var btn = document.getElementById('btnClick');
btn.onclick = disPlay

function disPlay() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
  
    document.getElementById('quotesOutput').innerText = quote.text;
    document.getElementById('outherOutput').innerText = quote.author;
  }
  