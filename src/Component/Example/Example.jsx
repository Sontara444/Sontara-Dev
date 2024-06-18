import React from 'react';
import './Example.css'

const Example = () => {
  return (
    <>
    <div>
      {/* About */}
      <div className="about">
         <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
            <span className="icon"></span>
         </a>
         <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
            <span className="icon"></span>
         </a>
         <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
            <span className="icon"></span>
         </a>
         <a className="bg_links logo"></a>
      </div>
      {/* End About */}
      
      {/* Cards */}
      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <span className="close"></span>
          <span className="arrow"></span>
          <article>
            <h2>Elijah Green</h2>
            <div className="title">Bug Collector</div>
            <div className="pic">
              <img src="https://rafaelavlucas.github.io/assets/images/img-1.jpeg" alt="Elijah Green"/></div>
            <div className="desc">Elijah has collected bugs since they were six years old and now has many dozen bugs but none in their pants.</div>
          </article>
          <div className="actions">
            <button className="btn"><span>like</span><img className="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg" alt="like"></img></button>
            <button className="btn"><span>trade</span><img className="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg" alt="trade"></img></button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <span className="close"></span>
          <span className="arrow"></span>
          <article>
            <h2>Morgan Sweeney</h2>
            <div className="title">Ant Collector</div>
            <div className="pic"><img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Morgan Sweeney"></img></div>
            <div className="desc">Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.</div>
          </article>
          <div className="actions">
            <button className="btn"><span>like</span><img className="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg" alt="like"></img></button>
            <button className="btn"><span>trade</span><img className="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg" alt="trade"></img></button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <span className="close"></span>
          <span className="arrow"></span>
          <article>
            <h2>Adrian Woodward</h2>
            <div className="title">Fly Collector</div>
            <div className="pic"><img src="https://images.unsplash.com/photo-1506755855567-92ff770e8d00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80" alt="Adrian Woodward"></img></div>
            <div className="desc">Adrian has collected flies since they were six years old and now has many dozen flies but none in their pants.</div>
          </article>
          <div className="actions">
            <button className="btn"><span>like</span><img className="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/heart.svg" alt="like"></img></button>
            <button className="btn"><span>trade</span><img className="icon" src="https://rafaelavlucas.github.io/assets/icons/misc/trade.svg" alt="trade"></img></button>
          </div>
        </div>
      </div>
      {/* End Cards */}
      
      {/* About */}
      <div className="about">
         <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
            <span className="icon"></span>
         </a>
         <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
            <span className="icon"></span>
         </a>
         <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
            <span className="icon"></span>
         </a>
         <a className="bg_links logo"></a>
      </div>
      {/* End About */}
    </div>
    </>
  );
};


export default Example;
