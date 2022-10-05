# Portfolio single page static website

## Setup

### Clone and install dependencies 

```sh
git clone https://github.com/wvovaw/wvovaw.github.io
yarn install # it is recomended by gridsome to use yarn
# npm i
```

### Edit gridsome.config.js 

```js
module.exports = {
  plugins: [
  ],
  siteName: 'My personal site',
  siteUrl: 'https://GITHUB_USERNAME.github.io', // insert your github username
  titleTemplate: '%s' // %s inserts ther siteName variable
}
```

### Create repository that called YOUR_GITHUB_USERNAME.github.io

Then type

```sh
git remote add https://github.com/USERNAME/USERNAME.github.io origin
git add .
git push origin master
```

### Deploy

```sh
npm run deploy
```
## Manage content with GraphQL

### Edit gridsome.server.js

```js
module.exports = function (api) {
  // Add collection that will collect simple notes
  api.loadSource(actions => {
    const notes = actions.addCollection({
      typeName: 'Note' // I recomend to use nominative
    })
    // Add a NODE to this COLLECTION
    notes.addNode({
      id: '0',
      title: 'Fabulous',
      note: 'Note',
    })
    // Add another one
    notes.addNode({
      id: '1',
      title: 'Fubar',
      note: 'Another note',
    })
  }
}
```

Run 

> It will rebuild the server and you will be able to perform queries

```sh
gridsome develop
```

Open `http://localhost:8080/___explore`

And write the query

```graphql
query {
    allNote {
        edges {
            node {
                id
                title
                note
            }
        }
    }
}
```

It will return all the notes that you've created in JSON format

> You can debug your Graphql server and queries using this selfhosted application and then insert debugged queries in your app inside of <page-query> or <static-query> tags.

Example component that renders the list of notes that we declared in gridsome.server.js

```vue
<template>
  <div class="list">
    <h1>My notes</h1> </br>
    <div v-for="edge in $static.notes.edges" :key="edge.node.id">
        <p> {{ edge.node.title }} </p>
        <p> {{ edge.node.note }} </p>
    </div>
  </div>
</template>
<!-- static-query for components -->
<static-query>
query {
    // Create an alias for allNote - notes. or use allNote instead
    notes: allNote {
        edges {
            node {
                id
                title
                note
            }
        }
    }
}
</static-query>
```
