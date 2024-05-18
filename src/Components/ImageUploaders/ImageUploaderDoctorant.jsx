import React, { useState } from "react";
import axios from "axios";

let imageName = "";
function ImageUploaderDoctorant() {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [imageUpload, setImageUpload] = useState(null);
  const [imagefileName, setImagefileName] = useState("No selected file");
  const [files, setFiles] = useState(null);


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/FSTBM/images/uploads/Profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
      imageName = response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="image"
        className="px-4 py-1"
        // ref={image}
        onChange={(event) => {
          handleFileChange(event);
          // const files = event.target.files;
          setFiles(event.target.files);
          if (files && files.length > 0) {
            setImagefileName(files[0].name);
            // setImageUpload(URL.createObjectURL(files[0]));
            setSelectedFile(event.target.files[0]);
          }
        }}
        hidden
      />
      {selectedFile ? (
        <img
          src={URL.createObjectURL(files[0])}
          alt={imagefileName}
          style={{
            width: "500px",
            height: "299px",
            objectFit: "cover",
          }}
          className="rounded-lg"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          style={{ height: "100px", width: "100px" }}
        >
          <path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
            fill="#1475cf"
          />
        </svg>
      )}
    </div>
  );
}

function imageDoctorantName() {
  return imageName;
}

export { imageDoctorantName };

export default ImageUploaderDoctorant;
