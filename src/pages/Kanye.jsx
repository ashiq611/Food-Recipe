
import { useEffect, useState } from "react";
const Kanye = () => {

    const [quote, setQuote] = useState([])

    useEffect(() => {
      fetch(`https://api.kanye.rest`)
        .then((response) => response.json())
        .then((data) => setQuote(data));
    }, []);

    const update = () => {
         fetch(`https://api.kanye.rest`)
           .then((response) => response.json())
           .then((data) => setQuote(data));
    }

    return (
      <div className="text-center">
        <h1 className="m-60 text-3xl">"{quote.quote}"</h1>
        <button className="btn btn-primary mb-60" onClick={update}>
          Another Quote
        </button>
      </div>
    );
};

export default Kanye;