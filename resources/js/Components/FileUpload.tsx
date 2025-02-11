import React, { useEffect, useState,useRef } from "react";



const FileUpload = ({ onSendFile }: { onSendFile: (file: any) => void }) => {
  const [image, setImage] = useState<string | null>(null); // L'image est une URL sous forme de chaîne de caractères
  const [error, setError] = useState<string | null>(null); // L'erreur est une chaîne de caractères ou null
  const [file,setFile]=useState<any | null >(null);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleRef = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setError(null); // Réinitialise les erreurs
    const files = e.dataTransfer.files;

    if (files.length === 1) {
      const file = files[0];
      
      // Vérifie que le fichier est une image
      if (file.type.startsWith('image/')) {
        setImage(URL.createObjectURL(file)); // Prévisualisation de l'image
      } else {
        setError('Veuillez déposer uniquement un fichier image.');
      }
    } else {
      setError('Veuillez déposer un seul fichier.');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const file = e.target.files?.[0]; // Vérifier si un fichier est sélectionné
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
      setError(null);
      setFile(e.target.files?.[0]);
    } else {
      setError('Veuillez sélectionner un fichier image valide.');
    }
  };


  useEffect(()=>{
    if (file) {
      onSendFile(file)
    }
  },[file])
 
  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleRef}
        style={{
          width: '100%',
          padding: '20px',
          border: '2px dashed #ccc',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: '#f9f9f9',
        }}
      >
        {image ? (
          <img src={image} alt="Prévisualisation" style={{ maxWidth: '270px', height: '180px' }} />
        ) : (
          <p>Glissez et déposez une image ici ou cliquez pour en sélectionner une.</p>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        style={{ display: 'none' }}
        ref={inputRef}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
