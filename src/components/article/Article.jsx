import React from 'react';
import './article.css'

const Article = ({imageURL,title , date}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageURL} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
       <div>
       <p>{date}</p>
       <h4>{title}</h4>
       </div>
        <p>Read Full article</p>
        </div>
    </div>
  )
};

export default Article;
