import { useRef } from "react";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import { useOnClickOutside } from "../../hooks";
import logo from '../../assets/logo.svg';
import logoWhite from "../../assets/logo-white.svg"
import { StyledHeader } from './Header.styled';

const Header = ({ open, setOpen, width, logoColor="white", menuColor="#79ACA9", hoverColor="#467976" }) => {
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return (
        <StyledHeader menuColor={menuColor} hoverColor={hoverColor}>
            {width < 700?
                <div ref={node}>
                    <a className="logo" href="/">
                        <span>
                            <img src={logoColor === "white"? logoWhite : logo} alt={'EF Logo'} />
                        </span>
                    </a>
                    <Burger open={open} setOpen={setOpen} menuColor={menuColor} />
                    <Menu open={open} setOpen={setOpen} menuColor={menuColor} hoverColor={hoverColor}/>
                </div>
            :
                <div className="row">
                    <a className="logo" href="/">
                        <span>
                            <img src={logoColor === "white"? logoWhite : logo} alt={'EF Logo'} />
                        </span>
                    </a>
                    <div className="nav-rt u-pull-right">
                        <ul>
                            <li>
                                <a href="/about">
                                    <span role="img" aria-label="about"/>
                                    About
                                </a>
                            </li>
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
                        </ul>
                    </div>
                </div>
            }
        </StyledHeader>
    );
}

export default Header;