import React from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Image1 from "./img/image1.jpg";
import Image2 from "./img/image2.jpg";
import Image3 from "./img/image3.jpg";
import Image4 from "./img/image4.jpg";
import Image5 from "./img/image5.jpg";

function App() {
  
    //Images array 
    const images = [
      {
        "id": 1,
        "title": "Image 1",
        "src": Image1,
      },
      {
        "id": 2,
        "title": "Image 2",
        "src": Image2,
      },
      {
        "id": 3,
        "title": "Image 3",
        "src": Image3,
      },
      {
        "id": 4,
        "title": "Image 4",
        "src": Image4,
      },
      {
        "id": 5,
        "title": "Image 5",
        "src": Image5,
      }

   ]

  return (
    <div className="App">
     <AliceCarousel autoPlay={true} autoPlayInterval="2000">
     {images.map((image) =>
     <img key={image.id} src={image.src} className="sliderimg" alt={image.title} />
    )}
     </AliceCarousel>
    </div>
  );
}

export default App;
