import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Article from './components/Article'
import ArticleTeaser from './components/ArticleTeaser'

import NewsData from '../data/news.json'
import NavItemsData from '../data/navItems.json'

const randomArticleIndex = 0
const randomArticle = NewsData[randomArticleIndex];

function App() {

  const [navItems, setNavItems] = useState(NavItemsData)
  const [article, setArticle] = useState({
    id: randomArticleIndex,
    title: randomArticle.title,
    abstract: randomArticle.abstract,
    byline: randomArticle.byline,
    image: randomArticle.multimedia.length ? randomArticle.multimedia[0] : null,
    created_date: randomArticle.created_date
  })

  return (
    <div className='App'>

      <NavBar items={navItems} />
      <ArticleTeaser id={article.id} title={article.title} date={article.created_date} />
      <Article />

    </div>
  )


}

export default App
