import React from 'react'

export default function About(props) {
  return (

    <>
     
     <div className='bi3'>
        <div style={{height:"20px"}}></div>


    <center> 
      <div style={{height:"70px"}}></div>
        <p className='display-3'><b>about us</b></p>
       <div style={{height:"200px"}}></div> 
    </center>

     </div>

<div style={{height:"50px"}}></div>

    <div className='container'>

        <div className='row'>

            <div className='col-md-2'></div>

            <div className='col-md-8'>

                  <center>     
                <p style={{fontSize:"30px",color:"#3f632f"}}>{props.hill}</p>
                  </center> 

            </div>

        </div>

    </div>

<div style={{height:"50px"}}></div> 

    <div className='container'>

        <img src='image/2.jpg' className='col-md-12 col-12' />
            

        <div className='row'>

            <div className='col-md-6 p-3'>

                <center style={{color:"#3f632f"}}>
                    <p style={{fontSize:"19px"}}><b>Our Mission</b></p>
                    <p className='p-3'>{props.hii }</p>        
                </center>

            </div>

            <div className='col-md-6 p-3'>

                <center style={{color:"#3f632f"}}>
                    <p style={{fontSize:"19px"}}><b>Our Values</b></p>
                    <p className='p-3'>{props.small}</p>        
                </center>

            </div>

        </div>

    </div>

<div style={{height:"50px"}}></div>    

    <div style={{backgroundColor:"#f7fffb"}}>

        <div className='container'>

            <div className='row'>

                <div className='col-md-2'></div>

                <div className='col-md-8'>
                    <div style={{height:"100px"}}></div>

                        <center>
                    <img src='image/3.svg' /><br /><br />
                    <p style={{fontSize:"30px",color:"#2d5440"}}>{props.mountains}</p>
                        <br /><br />
                    <img src='image/1.png' className='col-md-1 col-2' />
                        <p>Emily Davis</p>    

                    </center>

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
