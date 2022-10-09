import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Info from './Pages/Info/Info';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';
import Blog from './Pages/Blog/Blog';

class Trafalgar extends Component {

    render() {
        return (
            <>
                <Header/>
                <Home/>
                <Services/>
                <Info/>
                <Testimonials/>
                <Blog/>
                <Footer/>
            </>
        )
    }
}

export default Trafalgar;