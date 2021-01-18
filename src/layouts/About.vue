<template>
  <div class="about section">
      <div class="container">
        <h1 class="title">Hello, this is wvovaw's personal page! <span id="caret" aria-hidden="true"></span></h1>
        
      </div>
  </div>
</template>

<script>

</script>

<style scoped>
.container {
    padding: 0 200px 0 200px;
}
.about {
    font-size: 2em;
    color: #839496;
    height: 400px;
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
