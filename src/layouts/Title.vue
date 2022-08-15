<template>
  <div id="title">
    <div id="container">
      <h1>Hello, my name is Vladimir and this is my personal page!</h1>
      <p> I'm a general purpose developer and open source enthusiast.</p>
      <p> I create cli tools, desktop apps, bots, websites, etc. </p>
      <p> I like to create usefull tools, configure environments and automate things. <span id="caret" aria-hidden="true"></span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#container {
  padding: 0 15% 10% 15%;
}
#title {
  color: var(--foreground);
  width: 100%;
  background-color: var(--background);
  @media (min-width: 1024px) {
    font-size: 1.8em
  }
  @media (max-width: 1023px) {
    font-size: 1em
  }
}
#caret {
  border-right: .1em solid;
  animation: caret 1.5s steps(1) infinite;
  @keyframes caret {
    50% {
      border-color: transparent;
    }
  }
}
</style>
