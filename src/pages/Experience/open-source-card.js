import React from "react";
import './Experience.css';
import GSSOC from './../../../src/assets/images/open-source/1.jpg';
import SCI from './../../../src/assets/images/open-source/2.jpg';
import PSOC from './../../../src/assets/images/open-source/3.jpg';
import HC from './../../../src/assets/images/open-source/4.jpg';
function OpenSourceCard(){
    const openSourcePrograms = [
        {
          title: "GirlScript Summer Of Code 2020",
          cardImage: GSSOC,
          description:
            "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
        },
        {
          title: "Student CodeIn-20",
          cardImage: SCI,
          description:
            "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
        },
        {
          title: "PClub Summer Of Code 2020",
          cardImage: PSOC,
          description:
            "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
        },
        {
          title: "Hakin-Codes",
          cardImage: HC,
          description:
            "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
        },
      ];

    return (
      <div>
        <div>
          <h1  style={{paddingTop:'500px'}}>Open <span style={{color:'purple'}}>Source</span></h1>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
        {openSourcePrograms.map(({title,cardImage,description}) => {
            return (
              <div style={{padding:'15px',marginTop:'100px',background:'white'}}>
    
                  <div className="card volunteerCard">
                  
                    <img src={cardImage} height="250" width="100%" className="card-img" alt="card" />
                    <div class="content">
                        <h2 className="volunteerTitle">{title}</h2><br />
                        <p className="copy">{description}</p>
                    </div>
                  
                  </div>
          </div>
            )
        })}
        </div>
       </div>
    )

}

export default OpenSourceCard;