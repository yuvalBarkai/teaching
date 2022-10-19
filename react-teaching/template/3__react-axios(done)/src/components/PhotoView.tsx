import axios, { AxiosError } from "axios";
import { Component } from "react";

interface apiPhotos{
    albumId:number;
    id:number;
    title:string;
    url:string;
    thumbnailUrl:string;
}

class PhotoView extends Component{
    private photos: apiPhotos[] = [];
    private isDataError: boolean = false;
    private isDataHere: boolean = false;
    
    componentDidMount = async () => {
        try{
            const photosPromise = axios.get<apiPhotos[]>("https://jsonplaceholder.typicode.com/photos?albumId=1");
            let response = await photosPromise;
            this.photos = response.data;
            this.isDataHere = true;
        }
        catch(ex){
            let x = ex as AxiosError;
            this.isDataError = true;
            console.log(x.response?.status);
            console.log(x.message);
        }
        finally{
            this.setState({});
        }
    }
    
    public render(): JSX.Element {
        return(
            <div>
                {
                    this.isDataError ? <h2>Data Error</h2>
                    : 
                    this.isDataHere ? 
                    this.photos.map((p:apiPhotos)=> <div key={p.id}> <h3>{p.title}</h3> <img src={p.url} alt="Couldnt find it, sorry" /> </div> )
                    : 
                    null
                }
            </div>
        )
    }
}

export default PhotoView