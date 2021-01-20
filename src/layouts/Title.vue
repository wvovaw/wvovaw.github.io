<template>
  <div class="title">
      <div class="container">
        <h1>Hello, this is wvovaw's personal page!</h1>
        <p> I'm a general purpose developer.</p>
        <p> I'm used to create bots, web apps, cli tools etc. </p>
        <p> I like to create usefool tools, config enviroment and automate things. <span id="caret" aria-hidden="true"></span></p>
      </div>
  </div>
</template>

<style scoped>
.container {
    padding: 0 200px 55px 200px;
}
.title {
    font-size: 2em;
    color: #839496;
    width: 100%;
    background-color: #002b36;
}
#caret {
  border-right: .05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>
