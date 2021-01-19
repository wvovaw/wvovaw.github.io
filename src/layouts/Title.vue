<template>
  <div class="title">
      <div class="container">
        <h1>Hello, this is wvovaw's personal page!</h1>
        <p> I'm a general purpose developer.</p>
        <p> I'm used to create bots, web apps, simple statick websites; </p>
        <p> Also, I have done some special purpose math aim programs. <span id="caret" aria-hidden="true"></span></p>
      </div>
  </div>
</template>

<script>

</script>

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
