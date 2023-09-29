 import Diena from "./Diena.js";
 function App(){
    const pirmdienasStundas = ["sports", "dabaszinibas", "vesture", "krievu valoda"];
    const otrdienasStundas = ["sports2", "dabaszinibas2", "vesture2", "krievu valoda2"];
    return (
        <>
    
    <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
    <Diena diena="Otrdiena" stundas={otrdienasStundas}/>
</>
)
}
export default App;
