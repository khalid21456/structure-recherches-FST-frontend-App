import React, { useState } from 'react';
import axios from 'axios';


let imageName = "";
function ImageUploaderEnseignant() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post("http://localhost:8080/FSTBM/images/uploads/Profile", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data);
      imageName = response.data;
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

function imageEnseignantName() {
  return imageName;
}

export {imageEnseignantName}

export default ImageUploaderEnseignant;