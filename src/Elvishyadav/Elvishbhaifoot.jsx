import React from 'react'

const Elvishbhaifoot = () => {
    return (
        <>
            <div className='footerbackground mt-4'>
                <footer>
                    <h1 className='text-center pt-4'>Important Links</h1>
                    <div style={{display:'flex',fontSize:"15px",justifyContent:"center",marginTop:"2%"}}>
                        <h5 style={{padding:"10px"}}>Privacy Policy</h5>
                        <h5 style={{padding:"10px"}}>Refund and Returns Policy</h5>
                        <h5 style={{padding:"10px"}}>Contact Us</h5>
                        <h5 style={{padding:"10px"}}>Conditions</h5>
                        
                    </div>
                    <div style={{display:'flex',fontSize:"15px",justifyContent:"center",marginTop:"6%"}}>
                        <div style={{backgroundColor:"white",border:"2px solid black", width:"30px",height:"30px",paddingTop:"2.5px",borderRadius:"100px",textAlign:"center"}}>
                        <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div style={{backgroundColor:"white",border:"2px solid black", marginLeft:"10px", width:"30px",height:"30px",paddingTop:"2.5px",borderRadius:"100px",textAlign:"center"}}>
                        <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div style={{backgroundColor:"white",border:"2px solid black", marginLeft:"10px", width:"30px",height:"30px",paddingTop:"2.5px",borderRadius:"100px",textAlign:"center"}}>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                    <h5 className='text-center mt-5'>© 2023 Systumm Clothing. Built with  by NickFlix.in</h5>
                </footer>
            </div>
        </>
    )
}

export default Elvishbhaifoot
