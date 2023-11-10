import Diena from './Diena.js';
import {useEffect,useState} from "react";
function App(){

    const [isLoading, setIsLoading] = useState(true);
    const [stunduSaraksts, setStunduSaraksts] = useState([]);
  
    useEffect(()=>{
        async function getStunduSaraksts(){
            const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons");
            const data = await response.json();
            
            setIsLoading(false);

            const cleansedData = [
                {
                  diena: "Pirmdiena",
                  stundas: data.IPb22[0].classes,
                },
                {
                  diena: "Otrdiena",
                  stundas: data.IPb22[1].classes,
                },
                {
                  diena: "Trešdiena",
                  stundas: data.IPb22[2].classes,
                },
                {
                  diena: "Ceturdiena",
                  stundas: data.IPb22[3].classes,
                },
                {
                  diena: "Piektdiena",
                  stundas: data.IPb22[4].classes,
                },
              ];
              setStunduSaraksts(cleansedData);
        }

        getStunduSaraksts();
    }, []);

    console.log(stunduSaraksts);

    
    const dienasJSX = stunduSaraksts.map((diena,indekss) => {
        return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas}/>
    })
    return (
    <>
    <h1>Stundu Saraksts jau šonedel</h1>
    {isLoading ? "Loading" : dienasJSX}
    
    </>)
} 

export default App;