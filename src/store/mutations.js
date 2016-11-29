export default {
  SET_ARTICLES: (state, articles) => {
    state.articles = articles
  },
  SET_LINKS: (state, links) => {
    state.links = links
  },
  SET_ARTICLE: (state, article) => {
    state.article = article
  },
  LOADING_TOGGLE: (state, isLoading) => {
    state.isLoading = isLoading
  },
  TOASTING_TOGGLE: (state, isToasting) => {
    state.isToasting = isToasting
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  UPDATE_CONTENT: (state, content) => {
    state.article.content = content
  },
  UPDATE_TITLE: (state, title) => {
    state.article.title = title
  },
  UPDATE_LINK_NAME (state, {name, index}) {
    const href = state.links[index].href
    state.links.splice(index, 1, {name, href})
  },
  UPDATE_LINK_HREF (state, {href, index}) {
    const name = state.links[index].name
    state.links.splice(index, 1, {name, href})
  },
  ADD_NEW_LINK (state, index) {
    state.links.splice(index, 0, {name: '', href: ''})
  },
  REMOVE_LINK (state, index) {
    state.links.splice(index, 1)
  },
  SET_TOAST (state, payload) {
    state.toast.info = payload.info
    state.toast.btnNum = payload.btnNum
    state.toast.promise = new Promise((resolve, reject) => {
      state.toast.toastResolve = resolve
      state.toast.toastReject = reject
    })
  }
}
