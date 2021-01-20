// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  //   const projects = addCollection('Projects')
  //   projects.addNode({
  //     id: '0',
  //     title: 'Anonimalus',
  //     description: 'Discord.js bot for anonimous messaging.',
  //     image: 'anonimalus.jpg'
  //   })
  // })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })

  // Add collection
  api.loadSource(actions => {
    const projects = actions.addCollection({
      typeName: 'Project'
    })

    projects.addNode({
      id: '5',
      title: 'LSApproximation',
      description: 'Least square approximation app writen on c++ and qt.',
      image: 'lsa.png',
      link: 'https://github.com/wvovaw/LSApproximation'
    })

    projects.addNode({
      id: '4',
      title: 'Balda, the game',
      description: 'The Russian pen-and-paper game where players should build as long words as possible.',
      image: 'balda.png',
      link: 'https://github.com/wvovaw/Balda'
    })

    projects.addNode({
      id: '3',
      title: 'Twitch bot',
      description: 'It does what it\'s told.',
      image: 'pig.png',
      link: 'https://github.com/wvovaw/TwitchBot'
    })

    projects.addNode({
      id: '2',
      title: 'Vuejs vocabulary app',
      description: 'Vocabulary training web app.\n1) Add word, translation, image;\n2) Train words in quiz;\n3) Memorize them!',
      image: 'vuevocab.png',
      link: 'https://github.com/wvovaw/Vue-Vocab'
    })

    projects.addNode({
      id: '1',
      title: 'Clyrics',
      description: 'Search and read song lyrics from your terminal!',
      image: 'clyrics.png',
      link: 'https://github.com/wvovaw/clyrics'
    })

    projects.addNode({
      id: '0',
      title: 'Anonimalus',
      description: 'Discord.js bot for anonymous messaging.',
      image: 'anon.png',
      link: 'https://github.com/wvovaw/anonimalus'
    })
  })
}
