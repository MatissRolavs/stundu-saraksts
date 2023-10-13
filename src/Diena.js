import Stunda from './Stunda.js';
import styles from './Diena.module.css';


function Diena(props) {
    const stundasJSX = props.stundas.map((stunda,indekss) => {
        return <Stunda key={indekss} nosaukums={stunda}/>
    })
    return (
    <>
    <div className={styles.dienasBox}>
    <h1 className={styles.diena}>{props.diena}</h1>
    <ul>
        {stundasJSX}
    </ul>
    </div>
    </>
    )
}

export default Diena;