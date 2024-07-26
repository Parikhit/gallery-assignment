//hooks
import { useContext } from 'react';

//components
import Navbar from './components/navbar.component';
import Gallery from './components/gallery.component';
import Slider from './components/slider.component';
import Footer from './components/footer.component';

//context
import { SliderContext } from './contexts/slider.context';

//css
import './App.css';

const App = () => {
    const { selectedMediaIndex } = useContext(SliderContext);

    return (
        <>
            <Navbar />
            <Gallery />

            {selectedMediaIndex !== null && <Slider />}

            <Footer />
        </>
    );
};

export default App;
