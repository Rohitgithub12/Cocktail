// Layout.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Layout = () => {
    const [cocktail, setCocktail] = useState([]);
    const [input, setInput] = useState("");
    const [searched, setSearched] = useState(false);

    useEffect(() => {
        cocktailFun();
    }, []);

    const cocktailFun = async () => {
        const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
        const data = await resp.json();
        if (!data.drinks) {
            setCocktail([]);
            setSearched(true);
        } else {
            setCocktail(data.drinks);
            setSearched(true);
        }
    };

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/${id}`);
    };

    const handleSearch = () => {
        cocktailFun();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-500 via-red-500 to-purple-500">
            <div className="py-4 px-8 flex flex-col md:flex-row justify-between items-center gap-3 rounded-3xl">
                <input type="text" className="flex-1 bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 shadow-sm mb-3 md:mb-0" placeholder="Search your Fav Drinks here" onChange={(e) => setInput(e.target.value)} />
                <button className="bg-gradient-to-r from-yellow-500 via-orange-600 to-yellow-700 hover:from-yellow-700 hover:via-orange-700 hover:to-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl focus:outline-none " onClick={handleSearch}>Search</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-20 gap-4 justify-center">
                {searched && cocktail.length === 0 ? (
                    <div className="text-white text-4xl flex justify-center">NO DRINK FOUND, TRY AGAIN</div>
                ) : null}
                {cocktail.map((value,index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white w-full md:w-80 mb-5 rounded-lg shadow-md hover:cursor-pointer" onClick={() => handleClick(value.strDrink)}>
                        <img src={value.strDrinkThumb} alt={value.strDrink} className="w-full h-auto mb-2 rounded-md" />
                        <h4 className="font-bold flex justify-center mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-1 rounded-md">{value.strDrink}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Layout;
