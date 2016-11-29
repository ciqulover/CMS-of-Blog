export default {
  archive: state => {
    const articleInYear = {}
    const years = []
    state.articles.forEach(article => {
      const time = new Date(article.date)
      const year = time.getFullYear()
      if (!articleInYear[year]) {
        years.push(year)
        articleInYear[year] = []
      }
      articleInYear[year].push(article)
    })
    return {articleInYear, years}
  }
}
