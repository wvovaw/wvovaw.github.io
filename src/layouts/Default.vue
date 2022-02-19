<template>
  <div :class="colorscheme" id="layout">
    <div id="content-wrapper">
      <a href="https://github.com/wvovaw/wvovaw.github.io" class="github-corner" aria-label="Fork me on GitHub">
        <svg class="octo" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 250" fill="#fff" style="position: absolute; top: 0; right: 0">
          <path class="octo-frame" d="M0 0l115 115h15l12 27 108 108V0z" fill="#000"/>
          <path class="octo-arm" d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" style="-webkit-transform-origin: 130px 106px; transform-origin: 130px 106px"/>
          <path class="octo-body" d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"/>
        </svg>
      </a>
      <Header @nextColorscheme="nextColorscheme"/>
      <Title />
      <Slavery />
      <Projects />
      <Contact />
    </div> 
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from "./Header"
import Title from "./Title"
import Slavery from "./Slavery"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
export default {
  components: {
    Header,
    Title,
    Slavery,
    Projects,
    Contact,
    Footer
  },
  data() {
    return {
      colorscheme : "",
      colorschemes: [
        'gruvbox-dark',
        'solarized-dark',
        'gruvbox-light',
        'solarized-light',
        // 'black-and-white'
      ]
    }
  },
  methods: {
    nextColorscheme() {
      this.colorscheme = this.colorschemes.shift();
      console.log(this.colorscheme);
      this.colorschemes.push(this.colorscheme);
      localStorage.setItem('colorscheme', this.colorscheme);
      document.getElementById('app').className = this.colorscheme;
    }
  },
  mounted: function () {
    if (localStorage.getItem('colorscheme') === null)
      this.colorscheme = this.colorschemes[0];
    else
    {
      const c = localStorage.getItem('colorscheme');
      this.colorscheme = c;
      const pos = this.colorschemes.indexOf(c);
      if ( ~pos ) {
        this.colorschemes.splice(pos, 1);
        this.colorschemes.push(c);
      }
    }

    localStorage.setItem('colorscheme', this.colorscheme);
    document.getElementById('app').className = this.colorscheme;
  }
}
</script>

<style>
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}
.octo {
  fill: var(--aqua-color, #fff);
}
.octo-frame {
  fill: var(--background-alt, #000);
}
html {height: 100%;}
body {
  font-family: Poppins;
  margin:0;
  padding:0;
  line-height: 1.5;
  height: 100%;
  background-color: var(--background-alt);
}

::selection {
  background-color: var(--aqua-color);
}

h1 {
  margin: 0;
}

@media (max-width: 320px) {
  h1 {
    font-size: 1.5em;
  }
}
@media (max-width: 767px){
  .github-corner {
    display: none;
  }
}
</style>
