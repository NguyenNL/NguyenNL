export default function ({store}) {
  // If user not connected, redirect to /
  console.log('[ call middleware]', store.state.menuIsActive)
  if (store.state.menuIsActive === true) {
    store.commit('toggleMenuState')
  }
}
