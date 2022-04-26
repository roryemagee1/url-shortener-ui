const apiCalls = {
  getUrls() {
    return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
  },
  postUrls() {
    return
  }
}

export default apiCalls;
