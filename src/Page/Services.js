import React from 'react'

export default function Services(props) {
  return (

    <>

    <div className='bi4'>
    <div style={{height:"20px"}}></div>



    <center >
      <div style={{height:"50px"}}></div>
        <p className='display-4'><b>our services</b></p>
    </center>

        <div style={{height:"170px"}}></div>
    </div>

<div style={{height:"100px"}}></div>    
      
    <div className='container'>

        <div className='row'>

            <div className='col-md-4'>
                <img src='images/2.jpg' className='col-md-12 col-12 p-2' />
            </div>

            <div className='col-md-1'></div>

            <div className='col-md-6' style={{color:"#2d5440"}}>
                <div style={{height:"70px"}}></div>

                <p style={{fontSize:"25px"}}>Snow Mountains</p>

                <p>{props.snowy}</p>

                <p>{props.cold}</p>

                <p style={{fontSize:"25px"}}>From $99</p>

                <button className='btn2'>Start a Project</button>

            </div>

        </div>

    </div>

<div style={{height:"50px"}}></div>    
      
    <div className='container'>

        <div className='row'>

            <div className='col-md-4'>
                <img src='images/3.jpg' className='col-md-12 col-12 p-2' />
            </div>

            <div className='col-md-1'></div>

            <div className='col-md-6' style={{color:"#2d5440"}}>
                <div style={{height:"70px"}}></div>

                <p style={{fontSize:"25px"}}>Grass Mountains</p>

                <p>{props.grass}</p>

                <p>What is the biggest benefit your customer will get from this? Keep your target audience in mind.</p>

                <p style={{fontSize:"25px"}}>From $99</p>

                <button className='btn2'>Start a Project</button>

            </div>

        </div>

    </div>

<div style={{height:"50px"}}></div>    
      
      <div className='container'>
  
          <div className='row'>
  
              <div className='col-md-4'>
                  <img src='images/4.jpg' className='col-md-12 col-12 p-2' />
              </div>
  
              <div className='col-md-1'></div>
  
              <div className='col-md-6' style={{color:"#2d5440"}}>
                  <div style={{height:"70px"}}></div>
  
                  <p style={{fontSize:"25px"}}>Peak of Mountains</p>
  
                  <p>{props.top}</p>
  
                  <p>What is the biggest benefit your customer will get from this? Keep your target audience in mind.</p>
  
                  <p style={{fontSize:"25px"}}>From $99</p>
  
                  <button className='btn2'>Start a Project</button>
  
              </div>
  
          </div>
  
      </div>

<div style={{height:"70px"}}></div>      
  
    <div style={{backgroundColor:"#f5faf7"}}>

        <div className='container' style={{color:"#3b5948"}}>

            <div className='row'>

                <div className='col-md-7'>
                  <div style={{height:"100px"}}></div>

                    <h2>Why Love Nature</h2><br /><br />

                    <p style={{fontSize:"17px"}}>{props.alone}</p><br />

                    <p>The badges illustrate this.  We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.</p>

                </div>

                <div className='col-md-1'></div>

                <div className='col-md-4 '>
                    <div style={{height:"120px"}}></div>

                    <div className='container'>

                        <div className='row'>

                            <div className='col-md-6'>

                                <center>

                                <button className='btn4'><i class="fa fa-certificate" aria-hidden="true"></i></button>

                                <p>8 Years Experience</p>

                               </center>

                            </div>

                            <div className='col-md-6'>

                                <center>

                                <button className='btn4'><i class="fa fa-star" aria-hidden="true"></i></button>


                                <p>5 Star Rating</p>

                               </center>
                               
                            </div>
                              <div style={{height:"50px"}}></div>

                            <div className='col-md-6'>

                                <center>

                                <button className='btn4'><i class="fa fa-refresh" aria-hidden="true"></i></button>

                                <p>Quick Turnaround</p>

                               </center>

                            </div>

                            <div className='col-md-6'>

                                <center>

                                <button className='btn4'><i class="fa fa-cog" aria-hidden="true"></i></button>


                                <p>Dedicated Support</p>

                               </center>
                               
                            </div>

                        </div>

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
