
import '../Styles/AddtoCartSelection.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AddtoCartSelection = ({ product }) => {

    return <>
        <div>
            <h2 className='productname'>{product.name}</h2>
            <div>Color Conchiglia</div>
            {product.image.map((imageUrl, index) => (

                <img src={imageUrl} alt={`Image ${index}`} key={`image-${index}`} />

            ))}
            <div className='size-layout'>
                <p>Sizes</p>
                {product.sizes.map((size, index) => (
                    
                    <span  className="cart-item-size" key={index}>
                        {size}
                    </span>
                ))}
            </div>


            <button className='btnStyles'>Add to Cart <FontAwesomeIcon icon={faArrowRight} /></button>

            <div>
                <p>Price: ${product.price}</p>
            </div>
            <p>Description: {product.description}</p>
        </div>

    </>
}
export default AddtoCartSelection;