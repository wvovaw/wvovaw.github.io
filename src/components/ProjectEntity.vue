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
    padding: 10px 0 0 20px;
    font-family: Roboto Slab;
}
#description {
    grid-area: description;
    padding: 0 20px;
    font-family: Poppins;
    color: #586e75;
}
#image {
    grid-area: image;
}
#grid {
    display: grid;
    grid-template-areas: 
        "title title image image"
        "description description image image";
    grid-gap: 10px;
    grid-template-rows: 50px auto;
    grid-template-columns: 500px 1fr;

    padding: 10px;
}
img {
    width: 300px;
}
</style>