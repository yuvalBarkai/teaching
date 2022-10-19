import { SyntheticEvent, useState } from "react"
import bookList from "../data/bookList";
import bookTemplate from "../data/bookTemplate";

interface bookState {
    name: string;
    author: string;
    price: number;
}

interface propsType {
    callback: () => void;
}

function AddBook(props: propsType) {
    /*     const state = useState({name:"",author:"",price:0})[0];
        const setState = useState({name:"",author:"",price:0})[1]; */
    const [state, setState] = useState<bookState>({ name: "", author: "", price: 0 });
    
    const nameChange = (event: SyntheticEvent) => {
        setState({ name: (event.target as HTMLInputElement).value, author: state.author, price: state.price });
    }
    const authorChange = (event: SyntheticEvent) => {
        setState({ name: state.name, author: (event.target as HTMLInputElement).value, price: state.price });
    }
    const priceChange = (event: SyntheticEvent) => {
        setState({ name: state.name, author: state.author, price: Number((event.target as HTMLInputElement).value) });
    }

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        const newBook = new bookTemplate(state.name, state.author, state.price);
        bookList.push(newBook);

        props.callback();

        setState({ name: "", author: "", price: 0 });
    }

    return (
        <form onSubmit={submit}>
            <div>
                Enter name: &nbsp;
                <input type="text" value={state.name} onChange={nameChange} required />
            </div>
            <div>
                Enter Author: &nbsp;
                <input type="text" value={state.author} onChange={authorChange} required />
            </div>
            <div>
                Enter Price: &nbsp;
                <input type="number" value={state.price == 0 ? "" : state.price} onChange={priceChange} required />
            </div>
            <button> Send </button>
        </form>
    )
}

export default AddBook