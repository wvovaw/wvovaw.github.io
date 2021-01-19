<template>
    <div id="grid">
        <div id="title">
            <h1>{{ title }}</h1>
        </div>
        <div id="description">
            <p>{{ description }}</p>
        </div>
        <!-- <g-image id="image" src="~/images/avatar.jpg" width="200"></g-image> -->
        <g-image id="image" :src="setImage" ></g-image>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'description',
        'image',
    ],
    computed: {
        setImage: function() {
            return require("~/assets/images/" + this.image);
        }
    }
}
</script>

<style scoped>
#title {
    grid-area: title;
    padding: 0 40px;
    font-family: Roboto Slab;
}
#description {
    grid-area: description;
}
#image {
    grid-area: image;
}
#grid {
    display: grid;
    grid-template-areas: 
        "title title title image image"
        "description description description image image"
        "footer footer footer image image";
    grid-gap: 10px;
    grid-template-rows: 60px 1fr 30px;
    grid-template-columns: 150px 1fr;

    padding: 10px;
}
img {
    width: 200px;
}
</style>