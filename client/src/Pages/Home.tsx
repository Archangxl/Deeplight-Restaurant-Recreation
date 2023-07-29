
import '../Styles/HomeStyles.css'
import useHandleWindowSize from '../Tools/useHandleWindowSize';

const Home = () =>  {

    const {windowSize} = useHandleWindowSize();

    return (
        <main>
            {
                windowSize > 1024 ?

                <section className='main-container parallax'>

                    <div className='parallax-container'>
                        <div className='parallax-container-content'>
                            <p className='special-font'>Delightful Experience</p>
                        </div>
                        <div className='parallax-container-content'>
                            <p>Welome to "Deeplight Restaurant"</p>
                        </div>
                        <div className='parallax-container-content'>
                            <button>Reservation</button>
                        </div>

                        <div className='divider-special'></div>
                    </div>

                </section>

                :

                null
            }

            <div className='divider'></div>

            <section className='main-container'>
                
                <div>
                    <div>
                        <img></img>
                    </div>
                
                    <p>honest, flavorful food</p>
                    <p>A Few Words About Our Restaurant</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    <button>Read More</button>
                </div>

            </section>

            <div className='divider'></div>

            <section className='main-container'>
                    <p>eat good food</p>
                    <p>Have a quick look at the menu</p>
                    <p>Divider line thing</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>

                    <div className='picture-menu-side-by-side'>

                        <div>
                            <img></img>
                        </div>

                        <div>
                            <p>Chef Reccomend</p>

                            <p>Lamb Salad with Fregola (border dotted black line) $32.5</p>
                            <p>Lamb / Fregola</p>

                            <p>Pappardelle with Sea Urchin & Cauliflower (border dotted black line) $59.5</p>
                            <p>Pappardelle / Urchin / Cauliflower</p>

                            <p>Scallop Sashimi with Meyer Lemon Confit (border dotted black line) $ $40.5</p>
                            <p>Sashimi / Lemon</p>

                            <p>Braised Leeks with Mozzarella & Fried Egg (border dotted black line)</p>
                            <p>Leeks / Mozzarella / Egg $37.5</p>
                        </div>

                    </div>

            </section>

            <div className='divider'></div>
            
            <section className='main-container'>

                <div className='picture-menu-side-by-side'>

                    <div>
                        <img></img>
                    </div>

                    <div>
                        <p>Main Courses</p>

                        <p>Pork Rillette Hand Pies (border dotted black line) $19.5</p>
                        <p>Pork / Pies</p>

                        <p>Island Duck with Mulberry Mustard (border dotted black line) $25.5</p>
                        <p>Duck / Mustard</p>

                        <p>Malted Custard French Toast (border dotted black line) $37.5</p>
                        <p>Custard / Toast</p>

                        <p>Pasta with Lamb Ragù (border dotted black line) $29.5</p>
                        <p>Pasta / Lamb</p>
                    </div>

                </div>

            </section>

            <div className='divider'></div>
            
            <section className='main-container'>

                <div>
                    <img></img>
                </div>

                <div>  
                    <p>Our Customers Fall In Love With Us</p>
                    <p>“ by far the best occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. ”</p>
                    <p>Randy Morgan</p>
                </div>

            </section>

            <div className='divider'></div>

            <section className='main-container'>

                <div>
                    <img></img>
                </div>

                <div>
                    <p>Join Us</p>
                    <p>Book A Table Now, Come And See Us</p>

                    <div>
                        <button>Reservation</button>
                    </div>
                </div>

            </section>

        </main>
    );
}
export default Home;