const apiCalls = {
  getUrls() {
    return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
  },
  postUrls(longUrl, title) {
    return fetch('http://localhost:3001/api/v1/urls', {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        long_url: longUrl,
        title: title
      }),
    })
  }
}

export default apiCalls;
