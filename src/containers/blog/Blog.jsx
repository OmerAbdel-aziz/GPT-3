import React from 'react'
import './blog.css'
import { Article } from '../../components'
import rec1 from '../../assets/Rectangle 22-4.png'
import rec2 from '../../assets/Rectangle 22-1.png'
import rec3 from '../../assets/Rectangle 22-2.png'
import rec4 from '../../assets/Rectangle 22-3.png'
import rec5 from '../../assets/Rectangle 22.png'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'>A lot is happening,<br />
           We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageURL={rec1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article  imageURL={rec2}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
          <Article imageURL={rec3}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
          <Article imageURL={rec4}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
          <Article  imageURL={rec5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us explore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog