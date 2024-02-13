import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Details = () => {
    const param = useParams();
    const [state, setState] = useState([]);

    const fetchFunction = async () => {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${param.id}`);
        setState(response?.data?.drinks);
    }

    useEffect(() => {
        fetchFunction();
    }, []);

    return (
        <div>
            <Header title="Cocktail Details"/>
            <div className="p-4 md:p-20 bg-gradient-to-r from-pink-500 via-pink-500 to-red-500 text-white">
                {state.map((value, index) => (
                    <div key={index} className="mb-10 md:grid md:grid-cols-2 md:gap-4">
                        <div className="md:w-96 md:mb-0">
                            <img src={value.strDrinkThumb} alt={value.strDrink} className="w-full h-auto rounded-md" />
                        </div>
                        <div className="md:p-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ background: "-webkit-linear-gradient(left, #0000FF,#FF0000,#0000FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", WebkitTextStroke: "0.5px " }}>{value.strDrink}</h1>
                            <div className="mb-4">
                                <h2 className="text-lg md:text-xl text-yellow-400">Category</h2>
                                <h4 className="font-bold text-xl md:text-2xl text-red-950">{value.strCategory}</h4>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-lg md:text-xl text-yellow-400">Glass</h2>
                                <h4 className="font-bold text-xl md:text-2xl text-red-950">Serve: {value.strGlass}</h4>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-lg md:text-xl text-yellow-400">Instructions</h2>
                                <p className="font-bold text-xl md:text-2xl text-red-950">{value.strInstructions}</p>
                            </div>
                            <div>
                                <h2 className="text-lg md:text-xl text-yellow-400">Ingredients</h2>
                                <div className="grid gap-2">
                                    {value.strIngredient1 &&
                                        <p className="font-bold text-lg md:text-2xl text-red-950">
                                            <img src={`https://www.thecocktaildb.com/images/ingredients/${value.strIngredient1}-Small.png`} alt={value.strIngredient1} className="w-6 h-6 mr-2 inline-block" />
                                            {value.strMeasure1}{value.strIngredient1}
                                        </p>}
                                    {value.strIngredient2 &&
                                        <p className="font-bold text-lg md:text-2xl text-red-950">
                                            <img src={`https://www.thecocktaildb.com/images/ingredients/${value.strIngredient2}-Small.png`} alt={value.strIngredient2} className="w-6 h-6 mr-2 inline-block" />
                                            {value.strMeasure2}{value.strIngredient2}
                                        </p>}
                                    {value.strIngredient3 &&
                                        <p className="font-bold text-lg md:text-2xl text-red-950">
                                            <img src={`https://www.thecocktaildb.com/images/ingredients/${value.strIngredient3}-Small.png`} alt={value.strIngredient3} className="w-6 h-6 mr-2 inline-block" />
                                            {value.strMeasure3}{value.strIngredient3}
                                        </p>}
                                    {value.strIngredient4 &&
                                        <p className="font-bold text-lg md:text-2xl text-red-950">
                                            <img src={`https://www.thecocktaildb.com/images/ingredients/${value.strIngredient4}-Small.png`} alt={value.strIngredient4} className="w-6 h-6 mr-2 inline-block" />
                                            {value.strMeasure4}{value.strIngredient4}
                                        </p>}
                                    {value.strIngredient5 &&
                                        <p className="font-bold text-lg md:text-2xl text-red-950">
                                            <img src={`https://www.thecocktaildb.com/images/ingredients/${value.strIngredient5}-Small.png`} alt={value.strIngredient5} className="w-6 h-6 mr-2 inline-block" />
                                            {value.strMeasure5}{value.strIngredient5}
                                        </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default Details;
