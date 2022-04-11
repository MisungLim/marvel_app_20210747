import React from 'react';

function Marvel({name,picture}) {
  return (
    <div>
      <h1> One of Marvel's heroes is {name} </h1>
      <img src={picture} alt={name} />
   </div>
  );
}

const character = [
  {
    name: 'Iron Man',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory%26fname%3Dhttp%3A%252F%252Fcfile9.uf.tistory.com%252Fimage%252F99AB25505AE32E77173E8D&f=1&nofb=1',
  },
  {
    name: 'Captain America',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory%26fname%3Dhttp%3A%252F%252Fcfile22.uf.tistory.com%252Fimage%252F9998ED375AE32E7731DECB&f=1&nofb=1',
  },
  {
    name: 'Thor',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory2%26fname%3Dhttp%3A%252F%252Fcfile23.uf.tistory.com%252Fimage%252F9989BD3C5AE32E7718AEBC&f=1&nofb=1',
  },
  {
    name: 'Hulk',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9919CA445AE0095C04&f=1&nofb=1',
  },
  {
    name: 'Black Widow',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory2%26fname%3Dhttp%3A%252F%252Fcfile2.uf.tistory.com%252Fimage%252F990436425AE32E772F9B67&f=1&nofb=1',
  },
  {
    name: 'Doctor Strange',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory2%26fname%3Dhttp%3A%252F%252Fcfile29.uf.tistory.com%252Fimage%252F991BAB3E5AE32E7731CA38&f=1&nofb=1',
  },
  {
    name: 'Black Panther',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR720x0.q80%2F%3Fscode%3Dmtistory%26fname%3Dhttp%3A%252F%252Fcfile29.uf.tistory.com%252Fimage%252F9947B0365AE32E772AE164&f=1&nofb=1',
  },
  {
    name: 'Spider Man',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fccimg.hellomarket.com%2Fimages%2F2019%2Fitem%2F01%2F10%2F10%2F5119_1309805_6.jpg%3F&f=1&nofb=1',
  }
];

function App() {
  return (
    <div>
      {character.map(dish =>(
        <Marvel name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
