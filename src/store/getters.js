export default {
  archive: state=> {
    const articleInYear = {}
    const years = []
    state.articles.forEach(article=> {
      let year = new Date(article.date).getFullYear()
      if (!articleInYear[year]) {
        years.push(year)
        articleInYear[year] = []
      }
      articleInYear[year].push(article)
    })
    return {articleInYear, years}
  }
}
