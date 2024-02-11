var COLORS = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "aquamarine",
    "brown",
    "coral",
    "chocolate",
    "crimson",
    "cyan",
    "orange",
    "gold",
    "pink"
  ];
  

  let ANIMALS = [
    'lion',
    'cow',
    'shark',
    'rabbit',
    'duck',
    'monkey',
    'goat',
    'tiger',
    'penguin',
    'panda',
    'bear',
    'horse',
    'girafee',
    'lizard',
    "zebra"
  ]
  
  let COUNTRIES = [
    'france',
    'china',
    'spain',
    'italy',
    'canada',
    'peru',
    'brasil',
    'argentina',
    'colombia',
    'mexico',
    'japan',
    'thailand',
    'england',
    'israel',
    "egypt",
    "russia"
  ]
  
    function randomWord(type=COLORS) {
      switch (type) {
        case 'animals':
          return ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  
        case 'countries':
          return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
        
        case 'colors':
        default:
          return COLORS[Math.floor(Math.random() * COLORS.length)];
      }
    }
    
    export { randomWord };