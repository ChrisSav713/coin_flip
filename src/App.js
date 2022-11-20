import './App.css';
import React from 'react'


function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise( (resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    let limit = 100;

    while(headsCount < 5) {
      attempts++;
      if(attempts >= limit) { 
        break;
      }
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if(result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }
    if (headsCount === 5) {
      resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
      reject(`it took over the limit of ${limit}`)
    }
  });
}

function App() {
  fiveHeads()
    .then( res => console.log(res))
    .catch( err => console.log(err))

  console.log("When does this run now?");
  
  return ( 
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;