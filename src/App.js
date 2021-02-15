
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"

function App() {
  return (
    <>
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <Navbar className="navybar"/>
    <Header/>
    {/* <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <About/>
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <Education/>
    
      <Experience />
     */}
    </>

    
  );
}

export default App;
