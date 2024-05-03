import React from 'react'

export default function Home(props) {
  return (
    <>

<div className='bi1 '>

    
<div className='container'>

  <div className='row'>

    <div className='col-md-3'></div>

    <div className='col-md-6'>

     <center><div style={{height:"100px"}}></div>

        <h2>we all love</h2>
        <p className='display-1'><b>nature</b></p>

        <p >{props.nature}</p>

        <button className='btn1'>Get Started</button>    

    </center><div style={{height:"200px"}}></div>

    </div>

  </div>

</div>

</div>


<div style={{height:"100px"}}></div>    

   <center>
    <p style={{color:"#194008",fontSize:"40px"}}>Our Services</p>
    <div style={{height:"3px",width:"100px",backgroundColor:"#fad82d"}}></div>
    </center>
    <div style={{height:"70px"}}></div>

    <div className='container'>

        <div className='row'>

            <div className='col-md-4'>

              <div className='col-md-12 p-1'>

                <img src='imgs/2.jpg' style={{borderRadius:"3px"}} className='col-12' /><div style={{height:"20px"}}></div>

                <p style={{fontSize:"20px"}} className='p-1'>Web Design</p>
                <p className='p-1'>{props.snow}</p>   

              </div>  

            </div>

            <div className='col-md-4'>

              <div className='col-md-12 p-1'>

                <img src='imgs/3.jpg' style={{borderRadius:"3px"}} className='col-12' /><div style={{height:"20px"}}></div>

                <p style={{fontSize:"20px"}} className='p-1'>Grpahic Design</p>
                <p className='p-1'>{props.grass}</p>   

              </div>  

            </div>

            <div className='col-md-4'>

              <div className='col-md-12 p-1'>

                <img src='imgs/4.jpg' style={{borderRadius:"3px"}} className='col-12' /><div style={{height:"20px"}}></div>

                <p style={{fontSize:"20px"}} className='p-1'>Content Creation</p>
                <p className='p-1'>{props.peak}</p>   

              </div>  

            </div>

        </div>

    </div>

<div style={{height:"50px"}}></div>    
    
    <div style={{backgroundColor:"#f7faf9"}}>

      <div className='container'>

          <div className='row'>

              <div className='col-md-2'></div>

              <div className='col-md-8'>
                <div style={{height:"100px"}}></div>

              <center>

                  <img src='imgs/2.svg' /><br /><br />

                  <p style={{fontSize:"30px",color:"#044a27"}}>{props.mou}</p>
                  
                  <div style={{height:"50px"}}></div>

                  <img src='imgs/1.png' style={{height:"50px",width:"50px"}} /><div style={{height:"10px"}}></div>
                  <p>Jane Miller</p>

              </center>

              </div>
                <div style={{height:"100px"}}></div>

          </div>

      </div>

    </div>

<div style={{height:"50px"}}></div>    
    
    <div className='container'>

        <div className='row'>

            <div className='col-md-5' style={{color:"#0b3b25"}}>
              <div style={{height:"100px"}}></div>

                <p>ABOUT US</p>

                <p style={{fontSize:"30px"}}>Tell website visitors who you are and why they should choose your business.</p>

                <p>{props.leaf} </p>

                <button className='btn2'>Find Out More</button>

            </div>

            <div className='col-md-2'></div>

            <div className='col-md-5' >

                <img src='imgs/5.jpg' className='col-md-12 col-12' />

            </div>

        </div>

    </div>

<div style={{height:"50px"}}></div>    

    <div className='container-fuild'>

        <div className='bi2'>

            <div className='container'>

                <div className='row'>

                    <div className='col-md-3'></div>

                    <div className='col-md-6' style={{color:"#325e3f"}}>
                      <div style={{height:"100px"}}></div>

                        <center>
                        <p className='display-5'><b>QUESTIONS?</b></p><br />

                        <p style={{fontSize:"18px"}}>{props.que}</p><br />

                        <button className='btn3'>Let's Talk Now</button>

                        </center>

                    </div>

                </div>
                  <div style={{height:"100px"}}></div>

            </div>

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
