<template>
  <div id="app" class="container">
    <h2>{{ title }}</h2>
    <add-item-component v-on:add="addItem"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component v-model="title"></change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from './components/AddItemComponent'
  import ItemsComponent from './components/ItemsComponent'
  import ChangeTitleComponent from './components/ChangeTitleComponent'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    data () {
      return {
        items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
        title: 'My Shopping List'
      }
    },
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      }
    }
  }
</script>
<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }

  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>