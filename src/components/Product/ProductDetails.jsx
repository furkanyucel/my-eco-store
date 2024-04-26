
import { useParams } from 'react-router-dom';

function ProductDetails({ products }) {
  let { productId } = useParams();
  let product = products.find(p => p.id === parseInt(productId));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <div className="mt-2">
        <img src={product.image} alt={product.name} className="w-full max-w-sm"/>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sepete Ekle
      </button>
    </div>
  );
}

export default ProductDetails;
