import Vuex from 'vuex'
import axios from '../node_modules/axios/dist/axios.min'
const getInfoUser = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      info: {},
      infoMyTeam: {},
      infoMember: {}
    },
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      },
      setInfo: (state, info) => {
        state.info = info
      },
      setInfoMyTeam (state, infoMyTeam) {
        state.infoMyTeam = infoMyTeam
      },
      setInfoMember (state, infoMember) {
        state.infoMember = infoMember
      }
    },
    actions: {
      async getInfo ({commit}) {
        let {data} = await axios.get('http://localhost:4000/profile')
        commit('setInfo', data)
      },
      async getInfoMyTeam ({commit}) {
        let {data} = await axios.get('http://localhost:4000/myTeam')
        console.log('[getInfoMyTeam]', data)
        commit('setInfoMyTeam', data)
      },
      async getInfoMemberById ({commit}, id) {
        let {data} = await axios.get(`http://localhost:4000/myTeam/${id}`)
        console.log('[getInfoMemberById]', data)
        commit('setInfoMember', data)
      }
    }
  })
}
export default getInfoUser
