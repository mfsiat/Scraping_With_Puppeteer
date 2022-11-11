## Scrap with cheerio 

- Codes 
```javascript
axios(url)
  .then(response => {
    const html = response.data
    // console.log(html);
    const $ = cheerio.load(html)
    const articles = []
    $('.title', html).each(function() {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')

      articles.push({
        title,
        url
      })
    })

    console.log(articles)
  }).catch(err => console.log(err))
```