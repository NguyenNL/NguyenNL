<template>
  <div>
    <h1>{{$route.params.profile}}</h1>
    <span>{{infoMember.id}} </span>
    <span>{{infoMember.name}} </span>
    <span>{{infoMember.email}} </span>
    <span>{{infoMember.DOB}} </span>
    <span>{{infoMember.job}} </span>
    <span>{{infoMember.work}} </span>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: `profile + ${this.$route.params.id}`
      }
    },
    fetch ({store}) {
      store.dispatch('getInfoMemberById', this.$route.params.id)
    },
    computed: {
      infoMember () {
        return this.$store.state.infoMember
      }
    }
  }
</script>
