# code-challenge-order-list

### Responsive interface

```
vuetify
```

Vuetify is a component library for Vue.js and has been in active development since 2016. The goal of the vuetify is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.

### Multilingualism

```
vuetify + vue-i18n
```

I integreate vuetify with vue-i18n to allow keep all of translations in one place. Translation files are stored in a separate folader which can be easily maintained.

### No reloading when redirect to order detail

```
vue-router
```

Use vue-router to implement SPA to allow redirect without reloading.

### Change theme color

```
vuetify + css variable
```

Apart from vuetify built-in feature and following material design with light/dark theme, I found css variable very handy which can solve some extreme cases for vue project.

### Separate and minimize the style

```
node-sass
```

I use node-sass to build compressed css file from scss. NPM script is added to package.json to build and watch changes.

### Centralized state

```
vuex
```

Vues is used to implement centailized state management.

### Orders component plugin

```
vue plugin
```

My first thought on it was to build web component with cloud distribution to allow teams directly access the resource from different places. However I believe this does not satisfy the code challenge requirement so I did some research and create my first vue plugin and write prompts to allow team choose the number of orders to display.

### Avoid errors and anti-patterns

```
Visual Studio Code + Eslint + GitLens + Prettier + Vetur
```

The aboves are my usual development enviroment. However I am not used to write unit testing due to current position so I spent some time study @vue/test-utils and write unit testing. 
