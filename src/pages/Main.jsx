import React from 'react';
import '../Styles/Main.scss';
import ProductDetails from './ProductDetails';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image11 from '../assets/imagedetail1.jpg'
import image22 from '../assets/imagedetail2.jpg'

import ImageContainer from './ImageContainer';
import AddtoCartSelection from './AddtoCartSelection';
const Main = () => {
  const product = {
    name: 'JONATHAN SIMKHAI',
    image: [image11, image22],
    sizes: ['XS', 'S', 'L', 'M', 'XXL'],
    price: 'Get 4 interest-free payments of $196.25 with Klarna LEARN MORE',
    description: 'Speak to a Personal Stylist CHAT NOW',
  }
  const imageUrls = [image1, image2, image3, image4];
  return (
    <div className="main-section">
      {/* <div className="left-section">
        <ProductDetails />
      </div> */}

      {window.innerWidth > 768 && (
        <div className="left-section">
          <ProductDetails />
        </div>
      )}
      <div className="center-section">
        <ImageContainer imageUrls={imageUrls} />
      </div>
      <div className="right-section">
        <AddtoCartSelection product={product} />
      </div>
    </div>

  );
};

export default Main;
