export default {
  getWorld () {
    return new Promise((resolve, reject) =>
      setTimeout(
        () => resolve('world'),
        1000
      )
    )
  }
}
