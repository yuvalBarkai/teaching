interface bookProps {
    name: string;
    author: string;
    price: number;
}

function Book(props: bookProps) {
    return (
        <div className="book">
            <h2 className="name"> {props.name} </h2>
            <div className="author"> {props.author}</div>
            <footer className="price"> price: {props.price}$ </footer>
        </div>
    )
}


export default Book