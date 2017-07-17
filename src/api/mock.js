/* eslint-disable */
let routes = [{
  method: 'GET',
  url: '//api.chucknorris.io/jokes/random',
  response: {
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "HlIEjvcuSU-Zwl0ET8XXeA",
    "url": "http://api.chucknorris.io/jokes/HlIEjvcuSU-Zwl0ET8XXeA"
    "value": "Chuck Norris sired a baseball team...and a football team if you count all of the bastards."
  }
}, {
  method: 'GET',
  url: '//api.chucknorris.io/jokes/random',
  params: {
    category: 'explicit'
  },
  response: {
    "category": null,
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "aNyW_uFQTgmlN8BshQbK2A",
    "url": "http://api.chucknorris.io/jokes/aNyW_uFQTgmlN8BshQbK2A",
    "value": "What are you thinking about right now?  Chuck Norris says you're thinking about a teddy bear riding a unicycle. If you aren't, your last and shortly upcoming sight will be a GRIZZLY bear riding a MOTORcycle, which is one of the weaker pets of Chuck Norris."
  }
}, {
  method: 'GET',
  url: '//api.chucknorris.io/jokes/categories',
  response: [
    "explicit",
    "dev",
    "movie",
    "food",
    "celebrity",
    "science",
    "political",
    "sport",
    "religion",
    "animal",
    "music",
    "history",
    "travel",
    "career",
    "money",
    "fashion"
  ]
}, {
  method: 'GET',
  url: '//api.chucknorris.io/jokes/search',
  params: {
    query: 'vehicle'
  },
  response: {
    "total": 2,
    "result": [{
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "a6w6FfcfSEiQPM1oMuwCAQ",
        "url": "http://api.chucknorris.io/jokes/a6w6FfcfSEiQPM1oMuwCAQ",
        "value": "When Chuck Norris farts, it gives off the smell of the interior of a brand new vehicle."
      },
      {
        "category": null,
        "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        "id": "w0rMhCuXR7GJO7Sn_Tsw1w",
        "url": "http://api.chucknorris.io/jokes/w0rMhCuXR7GJO7Sn_Tsw1w",
        "value": "Chuck Norris doesn't have to pay $4.00 a gallon for gas. His vehicle is too frightened to ever run out."
      }
    ]
  }
}]

export default {
  routes
}
