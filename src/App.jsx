import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductCard from "./Components/ProductCard";

function App() {
    return (
        <div className="bg-linear-gradient-to-right from-yellow-400 to-indigo-500">
            <h1 className="bg-linear-gradient-to-right from-yellow-400 to-indigo-500">
                Carousel
            </h1>
            <ProductCard />
        </div>
    );
}

export default App;
