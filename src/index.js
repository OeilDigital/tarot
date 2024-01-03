import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import initialData from './config/datas'

const root = ReactDOM.createRoot(document.getElementById('root'))
const data = initialData
const dataCard = data.cards
const rootloaded = document.querySelector('#root')

const setHeight = () => {
  const currentHeight = window.innerHeight;
  document.body.style.height = `${currentHeight}px`;
}
window.addEventListener("resize", setHeight);
setHeight();

rootloaded.addEventListener("load", reboot())


function reload(tab) {
  function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      tmp = tab[i];
      tab[i] = tab[j];
      tab[j] = tmp;
    }
    return tab;
  }

  return tab = randomize(tab)
}

function reboot() {
  var randomCardsArray = Object.keys(dataCard).map(function (cle) {
    return [Number(cle), dataCard[cle]];
  });
  var randomCards = reload(randomCardsArray)
  var random = randomCards.map(item => { return item[1].id })
  data.columns.initialDeck.taskIds = random
  return random
}


root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();