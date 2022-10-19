interface bookProps {
    name: string;
    img:string
    author: string;
    price: number;
}

function Book(props: bookProps) {
    return (
        <div className="book">
            <h2 className="name"> {props.name} </h2>
            <img src={props.img} alt="Image, not found" className="img"/>
            <div className="author"> Author: {props.author}</div>
            <footer className="price"> Price: {props.price}$ </footer>
        </div>
    )
}

export default Book