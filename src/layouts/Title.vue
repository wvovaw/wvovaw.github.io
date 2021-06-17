<template>
  <div id="title">
    <div id="container">
      <h1>Hello, this is wvovaw's personal page!</h1>
      <p> I'm a general purpose developer and open source enthusiast.</p>
      <p> I create cli tools, desktop apps, bots, websites, etc. </p>
      <p> I like to create usefool tools, configure environments and automate things. <span id="caret" aria-hidden="true"></span></p>
    </div>
  </div>
</template>

<style scoped>

#container {
  padding: 0 15% 10% 15%;
}
@media (min-width: 1024px) {
  #title {
      font-size: 2em;
      color: var(--foreground);
      width: 100%;
      background-color: var(--background);
  }
}
@media (max-width: 1023px) {
  #title {
      font-size: 1em;
      color: var(--foreground);
      width: 100%;
      background-color: var(--background);
  }
}
#caret {
  border-right: .07em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

</style>
