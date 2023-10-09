import Diena from './Diena.js';
function App(){
    const visasStundas = [
    {diena:"Pirmdiena", 
    stundas:[
    'Sports',
    'Dabaszinibas',
    'Socialas zinibas',
    'Krievu valoda']
    },
    {diena:"Otrdiena", 
    stundas:[
    'Sports',
    'Dabaszinibas',
    'Socialas zinibas']},
    {diena:"Tresdiena", 
    stundas:[
    'Dabaszinibas',
    'Socialas zinibas',
    'Krievu valoda']},
    {diena:"Ceturdiena", 
    stundas:[
    'Sports',
    'Socialas zinibas',
    'Krievu valoda']},
    {diena:"Piektdiena", 
    stundas:[
    'Sports',
    'Dabaszinibas']}
];
    const dienasJSX = visasStundas.map((diena,indekss) => {
        return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas}/>
    })
    return (
    <>
    <h1>Stundu Saraksts jau šonedel</h1>
    {dienasJSX}
    </>)
} 

export default App;