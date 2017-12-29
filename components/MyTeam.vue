<template>
  <div class="my-team-container">
    <div class="info-member" v-for="(member, index) in info">
        <div>{{index}} </div>
        <div>{{member.name}} </div>
        <div>{{member.email}} </div>
        <div>{{member.DOB}} </div>
        <div>{{member.job}} </div>
        <div>{{member.work}} </div>
        <button class="see-info" v-on:onclick="goTo">See more</button>
    </div>
  </div>
</template>

<script>
  export default {
    created: function () {
      this.fetchData(this.$store)
    },
    methods: {
      fetchData: function (store) {
        console.log('[call fetch my team]')
        store.dispatch('getInfoMyTeam')
        this.info = this.$store.state.infoMyTeam
      },
      goTo: function (id) {
        this.redirect('/profile', { params: id })
      }
    },
    data: function () {
      return {info: {}}
    }
  }
</script>
<style>
  .my-team-container {
  }
  .info-member{
    margin-bottom: 0.2rem;
    padding: 0.2rem;
    background-color: #006600;
  }
  .see-info{
    background-color: red;
    padding: 0.5rem;
    margin-bottom: 2rem;
    border: solid 0.1rem #7f7f7f;
    width: 10rem;
  }
</style>
