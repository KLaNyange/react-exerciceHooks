import "./personnage.css"

function Personnage(props) {
    return (
        <div>
            <div className='perso'>
                <h1>{`Nom: ${props.moi.nom}`}</h1>
                <h2>{`Prénom: ${props.moi.prenom}`}</h2>
                <h3>{`Age: ${props.moi.age}`}</h3>
                <p>{`J'habite à ${props.moi.commune}`}</p>
            <button className={props.hide} onClick={props.rename}>Renomme</button>
            <button className={props.show} onClick={props.rename2}>Renomme</button>
            </div>
        </div>
    )
}

export default Personnage;
