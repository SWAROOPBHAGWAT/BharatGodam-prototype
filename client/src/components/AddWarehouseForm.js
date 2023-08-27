import React, { useState } from 'react';
import './AddWarehouseForm.css';



const server_uri="http://localhost:4000"
function AddWarehouseForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // Create a URL for the selected image to preview it
    const imageURL = URL.createObjectURL(selectedImage);
    setImagePreview(imageURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('size', size);
    formData.append('location', location);
    formData.append('image', image);
  
    try {
      const response = await fetch(server_uri+'/api/warehouses/add', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Warehouse added successfully');
        setName('');
        setDescription('');
        setSize('');
        setLocation('');
        setImage(null);
        setImagePreview(null);
      } else {
        console.error('Failed to add warehouse');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    
    <div className='add-warehouse-form'> 
      <h2>Add New Warehouse</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Warehouse Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Warehouse Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          placeholder="Warehouse Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        
                <input
          type="file"
          accept="image/jpeg"
          capture="environment"
          onChange={handleImageChange}
        />
        

        
      
        

        
        <button type="submit">Add Warehouse</button>
      </form>
    </div>
  );
}

export default AddWarehouseForm;
