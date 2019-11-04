import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../education/educationComponent';

const AboutComponent = () => {
    return (
          
        <div>
          <Grid>
              <Cell col={4}>
              <div style={{textAlign: 'center'}}>
                  <img 
                  src="https://i.ibb.co/Krb1ZV6/portrait.png"
                  alt="avatar"
                  style={{height: '200px'}}/>
              </div>
              <h2>Junel  C. Danao</h2>
              <h4 style={{color: 'grey'}}>Junior Developer</h4>
              <hr style={{borderTop: '4px solid white',color: 'white', width: '100%'}} />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea magnam nihil repellendus est vero quas? Quae, deleniti molestias. Minima soluta, aliquam reprehenderit quod laborum quas dolores veritatis! Praesentium, neque dolor.</p>
              <hr style={{borderTop: '4px solid white',color: 'white', width: '100%'}} />
            <div className="dataInfo">
              <h5 >Address</h5>
              <p>Mabini Macrohon Southern Leyte</p>
              <h5>Phone</h5>
              <p>09751475211</p>
              <h5>Email</h5>
              <p>jhonezdanao@gmail.com</p>
              <hr style={{borderTop: '4px solid white',color: 'white', width: '100%'}} />
              </div>
              </Cell>
              <Cell className="about-right-col"col={8}>
                  <h2>Educations</h2>
                  <Education 
                  startYear={2012}
                  endYear={2015}
                  schoolName="The College Of Maasin"
                  schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  />
                  
              </Cell>
          </Grid>
        </div>
     )
}
export default AboutComponent;