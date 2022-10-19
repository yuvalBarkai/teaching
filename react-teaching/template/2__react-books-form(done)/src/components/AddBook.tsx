import { SyntheticEvent, useState } from "react"
import bookList from "../data/bookList";
import bookTemplate from "../data/bookTemplate";

interface stateType {
    name: string;
    img:string;
    author: string;
    price: number;
}

function AddBook(props: any) {
    const [state, setState] = useState<stateType>({ name: "", img:"", author: "", price: 0 });

    const refreshName = (event: SyntheticEvent) => {
        setState({ name: (event.target as HTMLInputElement).value, img:state.img, author: state.author, price: state.price })
    }

    const refreshImg = (event: SyntheticEvent) => {
        setState({ name:state.name , img: (event.target as HTMLInputElement).value, author: state.author, price: state.price })
    }

    const refreshAuthor = (event: SyntheticEvent) => {
        setState({ name: state.name, img:state.img, author: (event.target as HTMLInputElement).value, price: state.price })
    }

    const refreshPrice = (event: SyntheticEvent) => {
        setState({ name: state.name, img:state.img, author: state.author, price: Number((event.target as HTMLInputElement).value) })
    }

    const submit = (event: SyntheticEvent) => {
        event.preventDefault();
        bookList.push(new bookTemplate(state.name,state.img, state.author, state.price));
        setState({ name: "", img:"", author: "", price: 0 });
        props.refreshBooks();
    }

    return (
        <form onSubmit={submit}>
            <div>
                <input type="text" placeholder="Book Name" value={state.name} onChange={refreshName} />
            </div>
            <div>
                <input type="text" placeholder="Img URL" value={state.img} onChange={refreshImg} />
            </div>
            <div>
                <input type="text" placeholder="Book Author" value={state.author} onChange={refreshAuthor} />
            </div>
            <div>
                <input type="number" placeholder="Price" value={state.price} onChange={refreshPrice} />
            </div>
            <button>GO</button>
        </form>
    )
}

export default AddBook