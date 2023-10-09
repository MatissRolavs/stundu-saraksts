import Stunda from './Stunda.js';

function Diena(props) {
    const stundasJSX = props.stundas.map((stunda,indekss) => {
        return <Stunda key={indekss} nosaukums={stunda}/>
    })
    return (
    <>
    <h1>{props.diena}</h1>
    <ul>
        {stundasJSX}
    </ul>
    </>
    )
}

export default Diena;