interface shoeType{
    id:number;
    name:string;
    price:number;
}

function ShowShoe(props:shoeType){

    return(
        <div className="shoe">
            {props.id}
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
        </div>
    )
}

export default ShowShoe