<template>
  <div class="about-container">
    <h1>About Page</h1>
    <p>Hello, I am Nguyen :)</p>
    <p>name: {{Posts.name}}</p>
    <p>email: {{Posts.email}}</p>
    <p>DOB: {{Posts.DOB}}</p>
    <p>job: {{Posts.job}}</p>
    <p>work at: {{Posts.work}}</p>
    <button class="showMyTeam-btn" v-on:click="showMyTeam"> Click here to see my team</button>
    <div>
      <div  class="info-member" v-for="(member, index) in info">
        <div>{{index}} </div>
        <div>{{member.name}} </div>
        <div>{{member.email}} </div>
        <div>{{member.DOB}} </div>
        <div>{{member.job}} </div>
        <div>{{member.work}} </div>
        <button class="see-info" @click="goTo(index)">See more</button>
      </div>
    </div>

  </div>
</template>
<style>
  .about-container {

  }
  .showMyTeam-btn {
    background-color:#006600;
    padding: 0.5rem;
    width: 13rem;
    margin-bottom: 2rem;
    border: solid 0.1rem #7f7f7f;
  }
  p{
    width: 20rem;
    padding: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .info-member{
    margin-left: 2rem;
  }
</style>

<script>
  import MyTeam from '../components/MyTeam.vue'
  export default {
    components: {
      MyTeam
    },
    created () {
      this.$store.dispatch('getInfo')
    },
    head () {
      return {
        title: 'About me'
      }
    },
    fetch ({store}) {
      store.dispatch('getInfo')
    },
    computed: {
      Posts () {
        console.log('[about post]')
        return this.$store.state.info
      }
    },
    methods: {
      showMyTeam: function () {
        console.log('[show my team]')
        this.$store.dispatch('getInfoMyTeam')
          .then(() => {
            this.info = this.$store.state.infoMyTeam
            this.iShowMyTeam = true
          })
      },
      goTo: function (id) {
        console.log('[member id]', id)
        this.$router.push({ path: `/${id}` }) // -> /user/123
      }
    },
    data: function () {
      return {
        iShowMyTeam: false,
        info: {}
      }
    }
  }
</script>

