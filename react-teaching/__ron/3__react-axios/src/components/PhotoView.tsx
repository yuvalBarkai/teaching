import { Component, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface apiPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

class PhotoView extends Component {
    private photos: apiPhotos[] = [];
    private isDataError: boolean = false;
    private isDataHere: boolean = false;

    async componentDidMount() {
        try {
            const photosPromise = axios.get<apiPhotos[]>("https://jsonplaceholder.typicode.com/photos?albumId=1");
            const response = await photosPromise;
            this.photos = response.data;
            this.isDataHere = true;
        }
        catch (ex) {
            let x = ex as AxiosError;
            this.isDataError = true;
            console.log(x.message);
            console.log(x.response?.status);
        }
        finally{
            this.setState({});
        }
    }

    render(): JSX.Element {
        return (
            <div>
                {
                    this.isDataError ? <h2>Data Error</h2>
                    :
                    this.isDataHere ? this.photos.map((p: apiPhotos) => <div key={p.id}> <h5>{p.title}</h5> <img src={p.thumbnailUrl} alt="Image not found" /> </div>)
                    :
                    <h3>Loading</h3>
                }
            </div>
        )
    }
}

export default PhotoView