<template>
  <div class="title">
    <div class="title__rows">
      <h1>Hello, my name is Vladimir</h1>
      <h2>and this is my personal page!</h2>
      <p> I'm a general purpose developer and open source enthusiast.</p>
      <p> I create web apps, websites, desktop apps, bots, cli tools, etc. </p>
      <p> I like to create usefull tools, configure environments and automate things. <span class="caret" aria-hidden="true"></span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display:flex;
  align-items: center;
  width: 100%;
  height: 85vh;
  background-color: var(--background);
  color: var(--foreground);

  & .title__rows {
    padding: 0 15% 0 15%;
  }

  @media (min-width: 1024px) {
    font-size: 1.6em
  }
  @media (max-width: 1023px) {
    font-size: 1em
  }
  h1, h2 {
    margin: 0;
  }
}
.caret {
  border-right: .1em solid;
  animation: caret 1.5s steps(1) infinite;
  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
}
</style>
