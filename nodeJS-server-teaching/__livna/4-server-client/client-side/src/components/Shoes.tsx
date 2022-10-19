import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react"
import ShowShoe from "./ShowShoe";

interface shoeType {
    id: number;
    name: string;
    price: number;
}

function Shoes() {
    const [list, setList] = useState<shoeType[]>();

    useEffect(() => {
        getShoes();
    }, []);

    const getShoes = async () => {
        try {
            const responce = await axios.get<shoeType[]>("http://localhost:5000/shoes");
            setList(responce.data);
        }
        catch (e) {
            let x = e as AxiosError;
            console.log(x.message);
        }
    }

    return (
        <div className="grid">
            {list && list.map(s => <ShowShoe id={s.id} name={s.name} price={s.price} key={s.id}/>)}
        </div>
    )
}

export default Shoes