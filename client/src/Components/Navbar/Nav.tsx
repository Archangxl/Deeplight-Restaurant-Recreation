import Logo from '../../Images/DeeplightRestaurantLogo.png';
import MenuToggle from '../../Images/MenuToggleIcon.png';
import RemoveMenu from '../../Images/RemoveMenu.png'
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const navContainer = {
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const menuContainer = {
        display: 'grid',
        padding: '15px 20px',
        backgroundColor: '#f5f5f5',
    }

    const logo = {
        maxWidth: '135px',

    }

    const grabAndRemoveMenu = {
        backgroundColor: '#eb5058',
        padding: '7.5px',
        width: '25px',
        height: '25px'
    }

    const button = { 
        border: 'none'
    }

    const menuLink = {
        padding: '8px 0px',
        borderTop: '#808080 solid 1px',
        textDecoration: 'none',
        color: '#808080',
        fontSize: '12px'
    }

    const lastMenuLink = {
        padding: '8px 0px 0px 0px',
        borderTop: '#808080 solid 1px',
        textDecoration: 'none',
        color: '#808080',
        fontSize: '12px'
    }

    const handleButtonClick = () => {
        if (toggleMenu) {
            setToggleMenu(false)
        } else {
            setToggleMenu(true);
        }
    }

    return (
        <>
            <div style={navContainer}>
                <img style={logo} src={Logo}></img>
            {
                toggleMenu == false ?
                <>
                    <button style={button} onClick={(e) => {e.preventDefault(); handleButtonClick();}}>
                        <img style={grabAndRemoveMenu} src={MenuToggle}></img>
                    </button>
                </>

                :

                <>
                    <button style={button} onClick={(e) => {e.preventDefault(); handleButtonClick();}}>
                        <img style={grabAndRemoveMenu} src={RemoveMenu}></img>
                    </button>
                </>
            }
            </div>
            {
                toggleMenu == true &&
                <>
                    <div style={menuContainer}>
                            <Link style={menuLink} to="/" /*onClick={(e) => {e.preventDefault(); console.log(1); handleButtonClick();}}*/>Home</Link>
                            <Link style={menuLink} to="/About" onClick={(e) => {e.preventDefault(); console.log(2); handleButtonClick();}}>About</Link>
                            <Link style={menuLink} to="/Gallery" onClick={(e) => {e.preventDefault(); handleButtonClick();}}>Gallery</Link>
                            <Link style={menuLink} to="/Testimonials" onClick={(e) => {e.preventDefault(); handleButtonClick();}}>Testimonials</Link>
                            <Link style={lastMenuLink} to="/Contact" onClick={(e) => {e.preventDefault(); handleButtonClick();}}>Contact</Link>
                    </div>
                </>
            }
        </>
    );
}
export default Nav;