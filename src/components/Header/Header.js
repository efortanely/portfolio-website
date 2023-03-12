import { useState, useRef, useEffect } from "react";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useOnClickOutside } from "../../hooks";
import "./Header.css"

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

const Header = ({ open, setOpen }) => {
    const node = useRef(); 
    const { _, width } = useWindowDimensions();
    useOnClickOutside(node, () => setOpen(false));

    return (
        <div className="header">
            {width < 680?
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            :
                <div className="container">
                    <div className="row">
                        {/* <div className="one columns">
                            <a href="/">
                                <div className="logo" href="/">
                                    logo placeholder
                                </div>
                            </a>
                        </div> */}
                        <div className="nav-rt u-pull-right">
                            <ul>
                                <li>
                                    <a href="/work">
                                        <span role="img" aria-label="work"/>
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="/projects">
                                        <span role="img" aria-label="projects"/>
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        <span role="img" aria-label="about"/>
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Header;