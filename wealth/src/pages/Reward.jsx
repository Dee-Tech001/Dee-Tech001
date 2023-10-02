import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Reward = () => {

    // youtube link
    const videoUrl = 'https://www.youtube.com/watch?v=VIDEO_ID';

    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate('/dashboard');
    }

    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle when a file is selected
    const handleFileChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        // Create a URL for the selected image
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }};
  
  return (
  <>
  <div className=' '>
   <button onClick={handleClick} className=' fas fa-arrow-left text-red-400 pt-5 text-lg'></button>
    <div className="flex justify-between items-center  ">
      
    <h1 className=' text-lg'>Rewards</h1>
    <span className='flex justify-center items-center rounded-full border-2  h-8 w-8 tracking-wider  '>....</span>
    </div>

    <div className=' rounded-md shadow-sm py-2 px-4 bg-white'>
        <h1 className=' leading-5'>Daily Cashback</h1>
        <p className=' flex justify-between '>check in and get 200     <span  className=' bg-red-200 rounded-3xl py-2 px-4'>Get</span></p>
    </div>
    <p><h1>Daily Bonus</h1></p>

    
    <div className=' rounded-md shadow-sm py-2 px-4 bg-white mb-5'>
        <h1 className=' leading-5'>Daily Task </h1>
        <p className=' flex justify-between '>like, suscribe and get 500CW, screenshot and upload proof to get reward.    <span  className='flex items-center bg-red-200 rounded-3xl  px-4 ml-3'>
             <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        Go
      </a></span></p>
        <p> <input type="file" accept="image/*" onChange={handleFileChange} /> </p>

         {/* Display the selected image */}
      {selectedImage && (
        <div>
          <h2>Tast Image :</h2>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}

      <p>
        <button>Submit Task</button>
      </p>
    </div>
    </div>
 
  </>
  )
}

export default Reward