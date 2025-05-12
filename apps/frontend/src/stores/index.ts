import { acceptHMRUpdate, defineStore } from 'pinia'

export const useHistory = defineStore('historyStore', () => {
  const history = ref([])

  return {
    history,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHistory, import.meta.hot))
}
