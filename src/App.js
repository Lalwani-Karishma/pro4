import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Page/Layout';
import Home from './Page/Home';
import About from './Page/About';
import Services from './Page/Services';
import Contact from './Page/Contact';

function App() {
  return (

    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="con" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    

  {/* <Home nature="Nature provides so many benefits that it's hard to see what it doesn't do. Spirituality, religion, health, happiness, excitement, education, money… nature provides it all. Lina – The sense of belonging to the Earth; to the community of nature." 
  snow="The word tarn comes from the Old Norse tjörn, small mountain lake with no tributaries Definitions of tarn. a mountain lake especially one formed by glaciers "
  grass="Grasses occupy a very broad spectrum of habitats, including mountains. Among the higher plants they are probably pioneers in a mountainous environment."
  peak=" Mountains tend to occur in groups, called ranges. A mountain's highest point is called its peak, or summit."
  mou="A generally massive and usually steep-sided, raised portion of the Earth's surface. "
  leaf="Mountain plants have needle-like leaves to reduce the loss of water from plants. These plants have a thick bark that protects the plant from the outer cold environment."
  que="Mountains are classified into four main types: upwarped mountains, volcanic mountains, fault-block mountains, and folded (or complex) mountains."/> */}


{/* <About hill="A natural mound of earth created either by faulting or erosion is a hill. A natural mound of earth created by faulting is mountain." 
hii="Hills are landforms that rise above the surrounding terrain and have relatively confined summits but are generally understood to be smaller than mountains. There is no formal distinction between the two."
small="A hill is a landform that is higher than the surrounding terrain and that is smaller than a mountain. Hill is a highland of much lower elevation than a mountain. "
mountains="Never measure the height of a mountain until you reach the top. Then you will see how low it was."/> */}


{/* <Services snowy="The sky is clear with a bright blue sky and puffy white clouds, and the crisp breeze is flowing throughout the covered porch of our cabin. The trees covered with snow for as far as the eyes can see, and the ground covered with inches of white,fluffy snow." 
cold="Snow is precipitation that forms when water vapor freezes. It is not frozen rain, but a crystallization of ice that typically forms in clouds."
grass="Grasses occupy a very broad spectrum of habitats, including mountains. Among the higher plants they are probably pioneers in a mountainous environment. Especially spectacular organs of grasses there are their inflorescences in the form of spikes or panicles, each composed of smaller organs called spikelets."
top="Mount Everest is part of the Himalaya and straddles the border of Nepal and China. chemical element with the symbol O, whose gas form is 21% of the Earth's atmosphere. introduction of harmful materials into the environment. people and culture native to the Himalayan region of Nepal and China."
alone="Being alone in nature relieves mental fatigue and restores our attention. Our desire for wilderness solitude is increasingly due to the need to “de-tether” from digital connectivity. Periodically withdrawing from society and into nature allows you to drop your public persona and connect with your authentic self."/> */}


<Contact num="000-123-4565"
mail="jack@gmail.com"
no="51263" />



    </>
    
  );
}

export default App;
