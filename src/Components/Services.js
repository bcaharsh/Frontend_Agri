import React from 'react'

export default function Services() {
  return (
    <>
    <div className="services">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_left">
                     <span>What We Do</span>
                         <h2>SERVICES WE OFFER</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="services_box_main">
                     <div  className="services_box text_align_left">
                          <figure><img src="/images/paz-arando-zwZusrYAGoM-unsplash.jpg" alt="#"/></figure>
                        <div className="veget">
                           <h3>CROP<br/>PRESERVATION</h3>
                           <p>Crop protection is the general method or the practice of protecting the crop yields from different agents including pests, weeds, plant diseases, and other organisms that cause damage to the agricultural crops farmers can implement to increase the success of their crops.</p>
                        </div>
                     </div>
                     <a className="read_more" href="/crop">Read More</a>
                  </div>
               </div>
               <div className="col-md-4">
               <div className="services_box_main">
                     <div  className="services_box text_align_left">
                          <figure><img src="/images/sean-foster-WOJazEMoUKQ-unsplash.jpg" alt="#"/></figure>
                        <div className="veget">
                           <h3>FERTILIZER</h3>
                           <p>Fertilizers are chemicals substances that farmers use daily to improve the growth and productivity of crops. Fertilizers provide beneficial nutrients that plants need to grow. Furthermore, families may also use them for flowers and plants to help them grow in a garden.Many fertilizers examples are suitable to be used on a large farm.</p>
                        </div>
                     </div>
                     <a className="read_more" href="services.html">Read More</a>
                  </div>
               </div>
               <div className="col-md-4">
               <div className="services_box_main">
                     <div  className="services_box text_align_left">
                          <figure><img src="/images/markus-spiske-71uUjIt3cIs-unsplash.jpg" alt="#"/></figure>
                        <div className="veget">
                           <h3>SOIL<br/>TESTING</h3>
                           <p>A soil test is important for several reasons: to optimize crop production, to aid in the diagnosis of plant culture problems, to improve the nutritional balance of the growing media and to save money and conserve energy by applying only the amount of fertilizer needed..</p>
                        </div>
                     </div>
                     <a className="read_more" href="services.html">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}
