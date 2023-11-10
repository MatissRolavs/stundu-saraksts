import Diena from './Diena.js';
import {useEffect,useState} from "react";
function App(){

    const [isLoading, setIsLoading] = useState(true);
    const [stunduSaraksts, setStunduSaraksts] = useState([]);
  
    useEffect(()=>{
        async function getStunduSaraksts(){
            const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons");
            const data = await response.json();
            setStunduSaraksts(data.IPb22);
            setIsLoading(false);
        }
        getStunduSaraksts();
    }, []);

    console.log(stunduSaraksts);

    
    const dienasJSX = stunduSaraksts.map((diena,indekss) => {
        return <Diena key={indekss}  stundas={diena.classes}/>
    })
    return (
    <>
    <h1>Stundu Saraksts jau šonedel</h1>
    {dienasJSX}
    </>)
} 

export default App;