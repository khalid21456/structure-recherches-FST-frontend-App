import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function EnseignantPublication() {
   const titre = useRef();
   const datePublication = useRef();
   const image = useRef();
   const contenu = useRef();
   const [errors, setErrors] = useState({});
   const [isFormSent, setIsFormSent] = useState(false);
   const [isFormValid, setIsFormValid] = useState(false);
  
  const validateForm = () =>{
    setErrors([]);
    const titreValue = titre.current.value;
    const datePublicationValue = datePublication.current.value;
    const imageValue = image.current.files[0];
    const contenuValue = contenu.current.value;
    let isFormValide = true;
    if(titreValue.trim() === ''){
       setErrors(prevState =>{
        return {
          ...prevState,
            ...{titre: 'Titre est vide'}
        }
       })
       isFormValide = false;
    }
    if(datePublicationValue.trim() === ''){
      setErrors(prevState =>{
        return {
          ...prevState, 
           ...{date: 'Date de publication est vide'}}
      })
      isFormValide = false;
    }
    if(!imageValue){
      setErrors(prevState =>{
        return {

        ...prevState, 
        ...{image: 'image de publication est vide'}}
      })
      isFormValide = false;
    }
    if(contenuValue.trim() === ''){
      setErrors(prevState=>{
        return {...prevState,
           ...{ contenu: 'Le contenu de publication est vide'}}
      })
      isFormValide = false;
    }else if(contenuValue.length <= 500){
      setErrors(prevState=>{
        return {...prevState,
           ...{ contenu: 'Le contenu de publication il faut depasser 500 character ('+contenuValue.length+'/500)'}}
      })
      isFormValide = false;
    }
    setIsFormValid(isFormValide)
    return isFormValide;
  }
  const resetForm = ()=>{
    titre.current.value = '';
    datePublication.current.value = '';
    image.current.value = '';
    contenu.current.value = '';
  }
  const handlChange = (e)=>{
    validateForm();
  }
   const submitForm = (e) =>{
    e.preventDefault();
    setIsFormSent(false);
    if(validateForm()){
       setIsFormSent(true);
      resetForm();
    }
    const titreValue = titre.current.value;
    const datePublicationValue = datePublication.current.value;
    const imageValue = image.current.files[0];
    const contenuValue = contenu.current.value;
   }
   const getError = (inputName) =>{
    return  errors[inputName];
   }
   const hasError = (inputName)=>{
    return getError(inputName) !== undefined;
   }
   const displayError = (inputName) => {
    const input = window[inputName];
    if(hasError(inputName)){
      input.style.border = '2px solid red'
      return <div className="text-red-600">{getError(inputName)}</div>
    }
    if(input !== undefined){
      input.removeAttribute('style');
    }
   }
  const displayErrors = ()=>{
    return Object.entries(errors).map((error, key)=>{
      const [input, message] = error;
      return <li key={key}>{input} : {message}</li>
    })
  }
    return (
      <div className="">
        {isFormSent ?
          <div className="text-white mx-10 mt-7 rounded-md h-16 flex items-center justify-start pl-3" style={{backgroundColor:'#28a745'}}>
             Votre publication est <strong> publie</strong>
        </div>
        :
        ''
        }
        {/* {Object.keys(errors).length>0 ?
          <div className="text-white mx-10 mt-7 rounded-md h-auto flex items-center justify-start pl-3" style={{backgroundColor:'red'}}>
             <ul>
              {displayErrors()}
             </ul>
        </div>
        : ''
        } */}
        <div className="mx-10 mb-7 mt-7 rounded-sm" style={{backgroundColor:'#9CAFAA'}}>
            <h2 className="text-white font-bold pl-8 py-4 text-xl" style={{backgroundColor:'#574476'}}>Publier une publication</h2>
            <form className="pb-7">
              <div className="grid grid-cols-3 gap-4 px-12 py-6">
                  <div>
                       <label className="block text-white mb-1 font-semibold text-xl">Titre</label>
                       <input type="text" id="titre" className="px-4 py-1 w-64 rounded-sm" ref={titre} onChange={handlChange}/>
                       {displayError('titre')}
                  </div>
                  <div>
                      <label className="block text-white mb-1 font-semibold text-xl">Date de publication</label>
                      <input type="date" id="date" className="px-4 py-1 w-64" ref={datePublication} onChange={handlChange}/>
                      {displayError('date')}
                  </div>
                  <div>
                      <label className="block text-white mb-1 font-semibold text-xl">Image</label>
                      <input type="file" id="image" className="px-4 py-1" ref={image} onChange={handlChange}/>
                      {displayError('image')}
                  </div>
                  <div className="col-span-3">
                      <label className="block text-white mb-1 font-semibold text-xl">Contenu</label>
                      <textarea cols="105" rows="10" id="contenu" className="px-4 py-1" ref={contenu} onChange={handlChange}></textarea>
                      {displayError('contenu')}
                  </div>
                  </div>
                  <div className="flex justify-end mr-10 mt-4 mb-4">
                    <Button
                    variant="contained"
                  style={{
                    backgroundColor: "#574476",
                    padding: "12px 45px",
                    marginRight: "20px",
                    fontSize: "17px",
                  }}
                  onClick={submitForm}
                  disabled={!isFormValid}
                    >
                        Publier
                    </Button>
                    <Button
                    variant="outlined"
                  style={{
                    borderColor: "#574476",
                    color: "#2d0560",
                    padding: "12px 45px",
                    fontSize: "17px",
                  }}
                  onClick={resetForm}
                    >
                        Annuler
                    </Button>
                  </div>
            </form>
        </div>
        </div>
    )
}