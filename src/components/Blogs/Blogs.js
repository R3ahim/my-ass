import React from 'react';
import './Blogs.css'
import semaImg from '../../download.jpg'
import inlineBlock from '../../in-block.webp'
const Blogs = () => {
    return (
        <div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1>What is  SEMANTIC ELMENTS</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Alex Harry</span> <span className='date-blog'>Mar 20, 2021</span></h5>
                    </div>
                    <img src={semaImg} alt="" />

                </div>
                <h2>Answer: </h2>  <p>Semantic element is html element which has a meaning. Examples of semantic elements include title, footer, nav, main, section, article, aside. Also included: summery, img, table, figcaption, form, table, mark and time. You use semantic elements to wrap the pieces of content together and give a brief description of what the name of the element is. 
                    many benifits of    SEMANTIC elment like 
                    (website SEO, different people understand the code,  )
                </p>
            </div>
            <div className='blog-cotnianer'>
                <div className='quest-contianer'>
                    <h1>What is differnet between inline and inline blok</h1>
                    <div>
                        <h5>By: <span className='name-blog'>Aman Datter Wala</span> <span className='date-blog'>Mar 9, 2022</span></h5>
                    </div>
                 <img src={inlineBlock} alt="" />

                </div>
                <h2>Answer: </h2>  
                <p>
               Inline and Inline block is mainly display propperty. html some element is inline and inLine block element.
               
               <br />
         
               <sapn className={'span-inline'}>Inline:</sapn>:  Display propperty an element as an inline element. Any height and width properties will have no effect.
               This one displays the element inline or on the same line. In other words, inline elements do NOT start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have NO effects. below top img there is exapme of inline elment;
            <br />
            <span className="span-inline">Inline-block:</span> Displays an element as an inline-level block container. You CAN set height and width values.. It's essentially the same thing as inline, except that you can set height and width values.nline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not;  below top img there is exapme of inline-block element;
            <br />
               <span style={{fontSize:'2rem'}}>Inline element:</span>are a,abbr b,bdo, br,sub ,textarea,time,var,small,sleect,script,sapn,button,i etc
               <br />
               <span style={{fontSize:'2em'}}>Inline block element :</span> inline element style <code>display:inline-block</code> goint to inlineBlock . below img example of inline-block
                </p>
            </div>
        </div>
    );
};

export default Blogs;