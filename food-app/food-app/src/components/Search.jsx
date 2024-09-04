import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "20e4800974694e6b8ca403b0e20c135d";

export default function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("pizza");
   /*
   syntax of useEffect hook for API call
   fetch is for api call and  ${} is for dynamic string
        use of async to allow synclonization of data
        use of await to prevent function json excution before actually 
        data or response from the server
      */
  useEffect(() => {
    async function fetchFood() {
     
     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
     
      //storing data
      const data = await res.json();
      setFoodData(data.results);
    }

    fetchFood()
  }, [query]);
  return (
    <div  className={styles.searchContainer}> 
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
