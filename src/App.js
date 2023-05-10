import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Products from "./components/products/products";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Slider/>
            <Virtual/>
            <Products/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}

export default App;
