// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // Add collection
  api.loadSource(actions => {
    const projects = actions.addCollection({
      typeName: 'Project'
    })
  // Add a node to this collection
    projects.addNode({
      id: '5',
      title: 'LSApproximation',
      description: 'Least square approximation app writen on c++ and qt.',
      techs: [
        { tech: 'c++17', color: '#6090bc'},
        { tech: 'qt', color: '#40c44c'},
        { tech: 'qtchart', color: '#40c44c'}
      ],
      image: 'lsa.png',
      link: 'https://github.com/wvovaw/LSApproximation'
    })

    projects.addNode({
      id: '4',
      title: 'Balda, the game',
      description: 'The Russian pen-and-paper game where players should build as long words as possible.',
      techs: [
        { tech: 'Node.js', color: '#3C873A'},
        { tech: 'Electron', color: '#303444'},
        { tech: 'Express', color: '#f0ecec'},
        { tech: 'Socket.io', color: '#1c1c1c'}
      ],
      image: 'balda.png',
      link: 'https://github.com/wvovaw/Balda'
    })

    projects.addNode({
      id: '3',
      title: 'Twitch bot',
      description: 'It does what it\'s told.',
      techs: [
        { tech: 'Python3', color: '#306998'},
        { tech: 'urlib2', color: 'grey'}
      ],
      image: 'pig.png',
      link: 'https://github.com/wvovaw/TwitchBot'
    })

    projects.addNode({
      id: '2',
      title: 'Vuejs vocabulary app',
      description: 'Vocabulary training web app.\n1) Add word, translation, image;\n2) Train words in quiz;\n3) Memorize them!',
      techs: [
        { tech: 'Node.js', color: '#3C873A'},
        { tech: 'Vue', color: '#42b883'},
        { tech: 'Materialize.css', color: '#f06c74'}
      ],
      image: 'vuevocab.png',
      link: 'https://github.com/wvovaw/Vue-Vocab'
    })

    projects.addNode({
      id: '1',
      title: 'Clyrics',
      description: 'Search and read song lyrics from your terminal!',
      techs: [
        { tech: 'Node.js', color: '#3C873A'},
        { tech: 'cheerio', color: '#CC3534'}
      ],
      image: 'clyrics.png',
      link: 'https://github.com/wvovaw/clyrics'
    })

    projects.addNode({
      id: '0',
      title: 'Anonimalus',
      description: 'Discord.js bot for anonymous messaging.',
      techs: [
        { tech: 'Node.js', color: '#3C873A'},
        { tech: 'Discord.js', color: '#738ADB'},
        { tech: 'Gridsom', color: '#00A672'}
      ],
      image: 'anon.png',
      link: 'https://wvovaw.github.io/anonimalus'
    })
  })
}
