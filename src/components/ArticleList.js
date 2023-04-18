import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

function ArticleList() {

   const data = blogData.posts.map((article) => {
          return (<Article key= {article.id} title = {article.title} date={article.date} preview={article.preview}/>) 
  })


  return(
    <main>
      {data} 
    </main>
  )

  
}

export default ArticleList;