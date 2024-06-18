import React from 'react'
import './Work.css'

function Work() {
    return(
        <div className="work">
    {/* <div className="work-main-head">
      <h3>Sevices</h3>
      <i className="fa-solid fa-cube"></i>
    </div> */}

    <div className="work-container">
      <div className="work-card">
        <div className="work-card-content">
          <img
            src="https://img.freepik.com/premium-photo/orange-background-with-wave-design_902049-9386.jpg"
            alt="img"
          />
          <h3>UX/II Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing i tenetur
            tempore ipsam molestiae.
          </p>
        </div>
      </div>
      <div className="work-card">
        <div className="work-card-content">
          <img
            src="https://img.freepik.com/premium-photo/orange-background-with-wave-design_902049-9386.jpg"
            alt="img"
          />
          <h3>UX/II Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus ipsa empore ipsam molestiae.
          </p>
        </div>
      </div>
      <div className="work-card">
        <div className="work-card-content">
          <img
            src="https://img.freepik.com/premium-photo/orange-background-with-wave-design_902049-9386.jpg"
            alt="img"
          />
          <h3>UX/II Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur ab non omnis qui tenetur
            tempore ipsam molestiae.
          </p>
        </div>
      </div>
    </div>
  </div>
    )
        

}

export default Work