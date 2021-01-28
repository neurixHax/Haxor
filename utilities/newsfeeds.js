import * as rssParser from 'react-native-rss-parser'
import fetch from 'node-fetch'
const newsFeed = ()=>{
  fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.description)
      rss.items.forEach((item) => {
        console.log('     Title:',item.title)
        console.log('     TitleDescription',item.description)
        console.log('     Link:', item.id)
      })
      // console.log(rss.items.length);
    });
}

newsFeed()