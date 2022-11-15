// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  // Add collection
  api.loadSource((actions) => {
    const projects = actions.addCollection({
      typeName: "Project",
    });
    // Add a node to this collection
    projects.addNode({
      id: "8",
      title: "LSApproximation",
      description:
        "Least square approximation method app writen on C++ and Qt.\n(I made it as my coursework in the computational math class)",
      techs: [
        { tech: "C++17", color: "#6090bc", icon: "ICPP" },
        { tech: "Qt", color: "#40c44c", icon: "IQT" },
        { tech: "QtChart", color: "#40c44c", icon: "IQT" },
      ],
      image: "lsa.png",
      link: "https://github.com/wvovaw/LSApproximation",
    });

    projects.addNode({
      id: "7",
      title: "Twitch bot",
      description: "It does what it's told.",
      techs: [
        { tech: "Python3", color: "#306998", icon: "IPython" },
        { tech: "urlib2", color: "grey", icon: "IPython" },
      ],
      image: "pig.png",
      link: "https://github.com/wvovaw/TwitchBot",
    });

    projects.addNode({
      id: "6",
      title: "Vuejs vocabulary app",
      description:
        "Vocabulary training web app.\n1) Add word, translation, image;\n2) Train words in quiz;\n3) Memorize them!",
      techs: [
        { tech: "Node.js", color: "#3C873A", icon: "INodejs" },
        { tech: "Vue", color: "#42b883", icon: "IVue" },
        { tech: "Vue-material", color: "#b3ff58", icon: "IMD" },
      ],
      image: "vuevocab.png",
      link: "https://github.com/wvovaw/Vue-Vocab",
    });

    projects.addNode({
      id: "5",
      title: "Clyrics",
      description: "Search and read song lyrics from your terminal!",
      techs: [
        { tech: "Node.js", color: "#3C873A", icon: "INodejs" },
        { tech: "cheerio", color: "#CC3534", icon: "IJquery" },
      ],
      image: "clyrics.png",
      link: "https://github.com/wvovaw/clyrics",
    });

    projects.addNode({
      id: "4",
      title: "Anonimalus",
      description:
        "Discord.js bot for anonymous messaging. Invite it to your server to send anonymous messages to your friends.",
      techs: [
        { tech: "Node.js", color: "#3C873A", icon: "INodejs" },
        { tech: "Discord.js", color: "#738ADB", icon: "IDiscord" },
        { tech: "Gridsome", color: "#00A672", icon: "IGridsome" },
      ],
      image: "anon.png",
      link: "https://wvovaw.github.io/anonimalus",
    });

    projects.addNode({
      id: "3",
      title: "Gif Wallpaper",
      description:
        "Set gif images as a wallpapers on OS Windows.\nIts backend is written on C and frontend on C++ with QT.",
      techs: [
        { tech: "C", color: "#a8b9cc", icon: "IC" },
        { tech: "C++17", color: "#6090bc", icon: "ICPP" },
        { tech: "qt", color: "#40c44c", icon: "IQT" },
      ],
      image: "gw.gif",
      link: "https://github.com/wvovaw/gw-gui",
    });

    projects.addNode({
      id: "2",
      title: "Todo app",
      description:
        "You create different pages and place notes with todo lists on them. It uses localStorage as store - no backend.",
      techs: [
        { tech: "Vue", color: "#42b883", icon: "IVue" },
        { tech: "Bulma.css", color: "#00d1b2", icon: "IBulma" },
      ],
      image: "todo.png",
      link: "https://wvovaw.github.io/vue-todo/",
    });

    projects.addNode({
      id: "1",
      title: "Balda, the game",
      description:
        "The Russian pen-and-paper word game where players should build as long words as possible.",
      techs: [
        { tech: "Node.js", color: "#3C873A", icon: "INodejs" },
        { tech: "Express", color: "#f0ecec", icon: "IExpress" },
        { tech: "Socket.io", color: "#1c1c1c", icon: "ISocketIO" },
        { tech: "Vue", color: "#42b883", icon: "IVue" },
        { tech: "Bulma.css", color: "#00d1b2", icon: "IBulma" },
      ],
      image: "balda.png",
      link: "https://github.com/balda-the-game",
    });

    projects.addNode({
      id: "0",
      title: "Mars gallery",
      description:
        "View all photos of mars ever taken by the NASA Perseverance, Curiosity, Opportunity and Spirit rovers available at NASA APIs and websites.",
      techs: [
        { tech: "Nuxt.js", color: "#00dc82", icon: "INuxt" },
        { tech: "Daisyui", color: "#5a0ef8", icon: "IDaisyui" },
        { tech: "Tailwind", color: "#38bdf8", icon: "ITailwind" },
      ],
      image: "mars-gallery.png",
      link: "https://mars-gallery.netlify.app",
    });
  });
};
