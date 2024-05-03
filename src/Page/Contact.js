import React from 'react'

export default function Contact(props) {
  return (

    <>

        <div className='bi5'>

        <div style={{height:"20px"}}></div>


    <center>
        <div style={{height:"50px"}}></div>
        <p className='display-3'><b>contact us</b></p>
    </center>

        <div style={{height:"170px"}}></div>
        </div>

<div style={{height:"100px"}}></div>        
      
    <div className='container'>

        <div className='row'>

            <div className='col-md-5' style={{color:"#355242"}}>

                <h2>You can find us at</h2>
                  <br /><br />

                <span>EMAIL</span>
                <h5>{props.mail}</h5>
                  <br /><br />

                  <span>PHONE NUMBER</span>
                  <h5>{props.num}</h5>
                     <br /><br />

                   <span>LOCATION</span>  
                   <h5>2360 Hood Avenue, San Diego, CA, {props.no}</h5>
                      <br /><br />

                   <button className='btn5'><i class="fa fa-twitter" aria-hidden="true"></i></button>   

                    <button className='btn5 ms-2'><i class="fa fa-instagram" aria-hidden="true"></i></button>

                    <button className='btn5 ms-2'><i class="fa fa-youtube-play" aria-hidden="true"></i></button>

            </div>

            <div className='col-md-1'></div><br /><br />

            <div className='col-md-6'>

                <h2 style={{color:"#355242"}}>Let's get in touch</h2>
                  <br /><br />

                <input type='text' placeholder='Your Name' style={{border:"none",outline:"none"}} className='ms-3' />
                  <hr /><div style={{height:"10px"}}></div>

                <input type='email' placeholder='Your Email' style={{border:"none",outline:"none"}} className='ms-3' />  
                  <hr /><div style={{height:"10px"}}></div>

                <input type='text' placeholder='Message' style={{border:"none",outline:"none"}} className='ms-3' /><div style={{height:"70px"}}></div>
                  <hr />

                <button className='btn3'>Send Message</button>  

            </div>

        </div>

    </div>

<div style={{height:"100px"}}></div>    

    <div style={{backgroundColor:"#f5faf7"}}>

        <div className='container'>

            <div className='row'>

                <div className='col-md-3'></div>

                <div className='col-md-6'>
                    <div style={{height:"100px"}}></div>

                       <center>
                    <p className='display-6' style={{color:"#3f634d"}}><b>We are optimists who love to work together</b></p>
                       </center>

                </div>

            </div>
              <div style={{height:"50px"}}></div>

            <div className='row'>

                <div className='col-md-3'>

                    <div className='col-md-12'>
                        <img src='imgss/2.jpg' className='col-12' />
                    </div>

                </div>

                <div className='col-md-3'>

                    <div className='col-md-12'>
                        <img src='imgss/3.jpg' className='col-12' />
                    </div>

                </div>

                <div className='col-md-3'>

                    <div className='col-md-12'>
                        <img src='imgss/4.jpg' className='col-12' />
                    </div>

                </div>

                <div className='col-md-3'>

                    <div className='col-md-12'>
                        <img src='imgss/5.jpg' className='col-12' />
                    </div>

                </div>

            </div>
              <div style={{height:"100px"}}></div>

        </div>

    </div>

    <div style={{height:"30px"}}></div>    

<div className='container'>

    <div className='row'>

        <div className='col-md-5' style={{color:"#325e3f"}}>

            <center>
            <span>Home</span>
            <span className='ms-3'>About</span>
            <span className='ms-3'>Services</span>                
            <span className='ms-3'>Contact</span></center>

        </div><br /><br />

        <div className='col-md-2'>

          <center><img src='imgs/1.svg' className='col-md-4 col-2' /></center>

        </div><br /><br /><br />

        <div className='col-md-5'>

            <center><p>Love Nature by Tyler Moore</p></center>

        </div>

    </div>
      <div style={{height:"30px"}}></div>

</div>



    </>
  )
}
