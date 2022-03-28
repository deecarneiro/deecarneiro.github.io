import './Card.css';

function Card(props) {

    const {title, imgSrc, description, buttonValue, onclick} = props;
    return (
        <span className="card">
            <h1>{title}</h1>
            <img src={imgSrc} alt={title} />
            <p>{description}</p>
            <button onClick={onclick}>{buttonValue}</button>
        </span>
    );
}

export default Card;
