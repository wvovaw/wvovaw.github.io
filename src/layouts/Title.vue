<template>
  <section class="title">
    <div class="title__rows">
      <h1>Hello, my name is Vladimir</h1>
      <h2>and this is my personal page!</h2>
      <p> I'm a general purpose developer and open source enthusiast.</p>
      <p> I create web apps, websites, desktop apps, bots, cli tools, etc. </p>
      <p> I like to create usefull tools, configure environments and automate things. <span class="caret"
          aria-hidden="true"></span></p>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 85vh;
  // background-color: var(--background);
  background-color: transparent;
  color: var(--foreground);
  font-size: 1.6rem;


  h1,
  h2 {
    margin: 0;
  }

  &__rows {
    padding: 0 15%;
  }

  @media (max-width: 768px) {
    height: 90vh;
    font-size: 1rem;

    &__rows {
      padding: 0 5%;
    }
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
