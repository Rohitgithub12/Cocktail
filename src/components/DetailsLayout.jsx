// import { useEffect, useState } from "react";


// const DetailsLayout = () => {
//     const [Cocktail, setCocktail] = useState([]);
//     const [id, setid] = useState("");
    
//     useEffect(() => {
//         Cocktailf();
//     }, []);

//     const Cocktailf = async () => {
//         const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//         const data = await resp.json();
//         setCocktail(data.drinks);
//         console.log(data.drinks)
//     }
    
        
      

//     return (
//         <div className="">
//             {
//                 Cocktail.map((value) => {
//                     <div>
//                         <div>{value.strCategory}</div>
//                     </div>
//                 }
                    
//                 )
//             }
//         </div>
//     );
// }

// export default DetailsLayout;




