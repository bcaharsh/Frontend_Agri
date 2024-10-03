import React from 'react'

 function About() {
  return (
    <div>
      <div  className="about">
         <div  className="container-fluid">
            <div  className="row d_flex">
               <div  className="col-lg-6 col-md-12">
                  <div  className="titlepage text_align_left">
                     <span>About Us</span>
                     <h2>AGRONOMY</h2>
                     <p>Agronomy is the science and technology of using plants for food, fuel, fiber, chemicals, recreation, or land conservation. It's a branch of agriculture that involves the study of soil management and crop production, and the relationship between soils and crops. Agronomists use a combination of sciences, including biology, chemistry, economics, ecology, earth science, and genetics, to improve and manage the world's major food crops.</p>
                     <a  className="read_more" href="/about">Learn More</a>
                  </div>
               </div>
               <div  className="col-lg-6 col-md-12">
                  <div  className="row d_flex">
                   <div  className="col-md-7">
                     <div  className="about_img">
                        <figure><img src="images/about_img.jpg" alt="#"/>
                        </figure>
                     </div>
                   </div>
                   <div  className="col-md-5">
                     <div  className="about_img">
                        <figure><img src="images/about_img1.jpg" alt="#"/>
                        </figure>
                     </div>
                   </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default About;