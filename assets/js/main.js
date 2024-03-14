const app = Vue.createApp({
  data() {
    return {
      myAccount: [
        {
          name: "Carlo",
          bio: "trying to learn Vue Js!",
          image: './assets/img/avatar_2.jpg'
        }
      ]
    }
  }
})

app.mount('#app')