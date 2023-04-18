import { Link } from "react-router-dom";
import restaurantFoodImage from "./assets/restaurant-food.jpg";
import "./Hero.css";
import pages from "../../../utils/pages";

const Hero = () => {
    return ( <
        section className = "hero" >
        <
        div className = "container grid" >
        <
        div className = "hero-information" >
        <
        h1 > Akelny < /h1> <
        p > We serve you special food with special prices and quality < /p> <
        Link className = "button-primary"
        to = { pages.get("bookings").path } >
        Reserve a table <
        /Link> <
        /div> <
        img className = "hero-image"
        src = { restaurantFoodImage }
        alt = "Restaurant food" / >
        <
        /div> <
        /section>
    );
};

export default Hero;