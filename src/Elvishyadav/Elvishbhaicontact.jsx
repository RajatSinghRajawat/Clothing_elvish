import React from 'react'
import Elvishbhainav from './Elvishbhainav'
import Elvishbhaifoot from './Elvishbhaifoot'

const Elvishbhaicontact = () => {
  return (
    <>
    <Elvishbhainav/>
     <div className="container">
       <div className="row">
        <div className='col-lg-6'>
      <img style={{height:"100vh",width:"100%",objectFit:"cover"}} src="https://systumm.com/wp-content/uploads/2023/11/CG-scaled.jpg" alt="" />
        </div>
        <div className='col-lg-6'>
          <h1 style={{fontSize:"40px"}}>Contact</h1>
          <p  style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus?</p>
          <a href="" style={{color:"blue"}}>help@systumm.com </a>


          <div  style={{marginTop:"8%"}}>
            <h3 style={{fontSize:"30px"}}>Gurgaon</h3>
            <a href="" style={{color:"blue"}}>help@systumm.com </a>
          </div>
        </div>
       </div>
     </div>
     <Elvishbhaifoot/>
    </>
  )
}

export default Elvishbhaicontact
