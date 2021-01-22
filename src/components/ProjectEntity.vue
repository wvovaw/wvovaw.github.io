<template>
    <div id="grid">
        <a :href="link">
            <div id="title">
                <h1>{{ title }}</h1>
            </div>
        </a>
        <div id="description">
            <p>{{ description }}</p>
        </div>
        <div id="image">
            <g-image :src="setImage" ></g-image>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'description',
        'image',
        'link'
    ],
    computed: {
        setImage: function() {
            return require("~/assets/images/" + this.image);
        }
    }
}
</script>

<style scoped>
a, a:visited {
  text-decoration: none;
  color: #859900;
}
a:hover {
    text-decoration: underline;
    color: #859900;
    cursor: pointer;
}
#title {
    grid-area: title;
    padding: 5% 0 0 5%;
    font-family: Roboto Slab;
}
#description {
    grid-area: description;
    padding: 5% 5%;
    font-family: Poppins;
    color: #586e75;
}
#image {
    grid-area: image;
    padding: 4%;
}
img {
    width: 100%;
    max-width: 900px;
    float: rihgt;
}
#grid {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
@media (min-width: 1024px){
    #grid {
        display: grid;
        grid-template-areas: 
            "title image"
            "description image";
        grid-gap: 4%;
        grid-template-rows: 5em 1fr;
        grid-template-columns: 30em 1fr;
        padding: 10px;
    }
    #image {
        margin-left: auto;
    }
}
</style>