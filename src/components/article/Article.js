import "./article.css"

function Article(props) {
    return (
        <div className="object">
            <div>
            <h3>{props.object.nom}</h3>
            </div>
            <div>
            <p>{`${props.object.prix}€`}</p>
            </div>
        </div>
    )
}

export default Article;
