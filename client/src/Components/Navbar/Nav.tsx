import Logo from '../../Images/DeeplightRestaurantLogo.png';
import MenuToggle from '../../Images/MenuToggleIcon.png';
import RemoveMenu from '../../Images/RemoveMenu.png'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/NavStyles.css';
import useToggleMenu from '../../Tools/useToggleMenu';
import useHandleWindowSize from '../../Tools/useHandleWindowSize';

const Nav = () => {

    const {setToggleMenu, toggleMenu} = useToggleMenu();
    const [currentPage, setCurrentPage] = useState('/');
    const {windowSize} = useHandleWindowSize();

    const handleButtonClick = () => {
        if (toggleMenu) {
            setToggleMenu(false)
        } else {
            setToggleMenu(true);
        }
    }


    return (
        <>
            {
                windowSize > 920 && 
                <>
                        <nav className="navContainer">
                            <img className='logo' src={Logo}></img>
                        </nav>     

                        <div className="menuContainer">
                            {currentPage == '/' ?
                                <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/'); handleButtonClick(); }} ><Link className='link' id="currentPage" to="/">Home</Link></p>
                                :
                                <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/'); handleButtonClick(); }} ><Link className='link' to="/">Home</Link></p>
                            }
                            {
                                currentPage == '/Menu' ?
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Menu'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Menu">Menu</Link></p>
                                :
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Menu'); handleButtonClick();}} ><Link className='link' to="/Menu">Menu</Link></p>
                            }
                            {
                                currentPage == '/About' ?
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/About'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/About">About</Link></p>
                                :
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/About'); handleButtonClick();}} ><Link className='link' to="/About">About</Link></p>
                            }
                            {
                                currentPage == '/Gallery' ?
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Gallery'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Gallery">Gallery</Link></p>
                                :
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Gallery'); handleButtonClick();}} ><Link className='link' to="/Gallery">Gallery</Link></p>
                            }
                            {
                                currentPage == '/Testimonials' ?
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Testimonials'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Testimonials">Testimonials</Link></p>
                                :
                                    <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Testimonials'); handleButtonClick();}} ><Link className='link' to="/Testimonials">Testimonials</Link></p>
                            }
                            {
                                currentPage == '/Contact' ?
                                    <p className='menuItems lastMenuItem' onClick={(e) => {e.preventDefault(); setCurrentPage('/Contact'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Contact">Contact</Link></p>
                                :
                                    <p className='menuItems lastMenuItem' onClick={(e) => {e.preventDefault(); setCurrentPage('/Contact'); handleButtonClick();}} ><Link className='link' to="/Contact">Contact</Link></p>
                            }
                        </div>
                </>
            }
            {
                windowSize <= 920 &&
                <>
                    <nav className="navContainer">
                        <img className='logo' src={Logo}></img>
                        {
                            toggleMenu == false ?
                            <>
                                <button className='menuButton' onClick={(e) => {e.preventDefault(); handleButtonClick();}}>
                                    <img className='grabAndRemoveMenu' src={MenuToggle}></img>
                                </button>
                            </>

                            :

                            <>
                                <button className='menuButton' onClick={(e) => {e.preventDefault(); handleButtonClick();}}>
                                    <img className='grabAndRemoveMenu' src={RemoveMenu}></img>
                                </button>
                            </>
                        }
                    </nav>
                    {
                        toggleMenu == true &&
                        <>
                            <div className="menuContainer">
                                    {currentPage == '/' ?
                                        <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/'); handleButtonClick(); }} ><Link className='link' id="currentPage" to="/">Home</Link></p>
                                        :
                                        <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/'); handleButtonClick(); }} ><Link className='link' to="/">Home</Link></p>
                                    }
                                    {
                                        currentPage == '/Menu' ?
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Menu'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Menu">Menu</Link></p>
                                        :
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Menu'); handleButtonClick();}} ><Link className='link' to="/Menu">Menu</Link></p>
                                    }
                                    {
                                        currentPage == '/About' ?
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/About'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/About">About</Link></p>
                                        :
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/About'); handleButtonClick();}} ><Link className='link' to="/About">About</Link></p>
                                    }
                                    {
                                        currentPage == '/Gallery' ?
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Gallery'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Gallery">Gallery</Link></p>
                                        :
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Gallery'); handleButtonClick();}} ><Link className='link' to="/Gallery">Gallery</Link></p>
                                    }
                                    {
                                        currentPage == '/Testimonials' ?
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Testimonials'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Testimonials">Testimonials</Link></p>
                                        :
                                            <p className='menuItems' onClick={(e) => {e.preventDefault(); setCurrentPage('/Testimonials'); handleButtonClick();}} ><Link className='link' to="/Testimonials">Testimonials</Link></p>
                                    }
                                    {
                                        currentPage == '/Contact' ?
                                            <p className='menuItems lastMenuItem' onClick={(e) => {e.preventDefault(); setCurrentPage('/Contact'); handleButtonClick();}} ><Link className='link' id="currentPage" to="/Contact">Contact</Link></p>
                                        :
                                            <p className='menuItems lastMenuItem' onClick={(e) => {e.preventDefault(); setCurrentPage('/Contact'); handleButtonClick();}} ><Link className='link' to="/Contact">Contact</Link></p>
                                    }
                            </div>
                        </>
                    }
                </>
            }
        </>
    );
}
export default Nav;