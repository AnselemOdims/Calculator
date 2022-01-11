import { useEffect, useState } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

const Quotes = () => {
  const defaultString = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston';
  const [quote, setQuote] = useState(`${defaultString}`);

  useEffect(() => {
    async function getQuotes() {
      const res = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await res.json();
      const quotes = `${data.quote} - ${data.author}`;
      const timer = setTimeout(() => setQuote(quotes), 7000);
      return () => {
        clearTimeout(timer);
      };
    }
    getQuotes();
  }, [quote]);

  return (
    <div className="home">
      <div>
        <h2 style={{ textAlign: 'center' }}>Random Mathematics Quotes</h2>
        <GiPerspectiveDiceSixFacesRandom style={{
          marginTop: '5px', marginLeft: '10px', fontSize: '20px', color: '#a8642c',
        }}
        />
      </div>
      <p>{quote}</p>
    </div>
  );
};

export default Quotes;
