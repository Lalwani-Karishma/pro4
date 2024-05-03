import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     
<nav class="navbar navbar-expand-sm navbar-dark bg-transparent fixed-top">

<div class="container">
<a class="navbar-brand" href="#"><img src="imgs/1.svg" className='col-md-10 col-7' /></a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" style={{backgroundColor:"#ebc634"}}>
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collapsibleNavbar">
<ul class="navbar-nav ms-auto">
<li class="nav-item">
<Link class="nav-link" to="/" style={{color:"black",fontSize:"18px"}}>Home</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="about" style={{color:"black",fontSize:"18px"}}>About</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="services" style={{color:"black",fontSize:"18px"}}>Services</Link>
</li>
<li class="nav-item">
<Link class="nav-link" to="con" style={{color:"black",fontSize:"18px"}}>Contact</Link>
</li>
<li class="nav-item">
<a class="nav-link" href="#" style={{color:"black",fontSize:"18px"}}><button style={{backgroundColor:"transparent",border:"1px solid black",color:"black"}} >202-555-0188</button></a>
</li>
</ul>
</div>
</div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;