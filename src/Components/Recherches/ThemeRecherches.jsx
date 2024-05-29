import React,{useEffect,useState} from "react";
import axios from "axios";

export default function ThemeRecherches(props) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/FSTBM/readImages/Theme/image-processing.jpg', {
            responseType: 'arraybuffer'
        })
        .then(response => {
            const imageData = new Blob([response.data]);
            const imageUrl = URL.createObjectURL(imageData);
            console.log(imageData)
            setImage(imageUrl);
            
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
    }, []);


    return (
        <div className="Theme-Recherches-Container">
          
        </div>
    )
}