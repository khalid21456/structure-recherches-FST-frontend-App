import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom"
import ThemeRecherches from "./ThemeRecherches";
import axios from "axios";
export default function ThemeCard(props) {


    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/FSTBM/readImages/Theme/'+props.image, {
            responseType: 'arraybuffer'
        })
        .then(response => {
            const imageData = new Blob([response.data]);
            const imageUrl = URL.createObjectURL(imageData);
            setImage(imageUrl);
            
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
    }, []);

    return(
        <div className="flex justify-center researchCard">
            <div className="w-3/5 mt-5 h-52    bg-gray-50 hover:bg-white border rounded-lg shadow-sm">
                <div className="flex">
                    {/* <div style={{width:"200px"}} className=" border rounded-s-lg"> */}
                        <img style={{width:"200px"}} className="h-52" src={image}/>
                    {/* </div> */}

                    <div className="ml-10 mt-4">
                        <h1 className="text-3xl" style={{fontFamily: "Poppins,Roboto"}}>{props.title}</h1>
                        <p className="w-4/5 mt-4" style={{fontFamily:"Roboto"}}>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}