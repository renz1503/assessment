import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'

export function Product() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [rate, setRating] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios({
      method: 'GET',
      baseURL: 'https://fakestoreapi.com',
      url: `/products/${productId}`
    })
      .then(({ data }) => {
        setProduct(data);
        setRating(data.rating)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
 }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>error</p>

  return (
    <div className='Product'>
      <div className='Product__Content'>
        <button type="button" className='Product__Content__Button' onClick={() => navigate(-1)}>Regresar</button>
        <div className='Product__Content__Text'>
          <p className='Product__Content__Text__Code'>Código: {product.id}</p>
          <h1 className='Product__Content__Text__Title'>{product.title}</h1>
          <p className='Product__Content__Text__Category'>Categoría: {product.category}</p>
          <p className='Product__Content__Text__Price'>Precio: S/ {product.price}</p>
        </div>
        <div className='Product__Content__Photo'>
          <figure className='Product__Content__Photo__Figure'>
            <img className='Product__Content__Photo__Figure_Img' src={product.image}></img>
          </figure>
        </div>
        <div>
          <div className='Product__Content__Description'>
            <span>Descripción</span>
            <p>{product.description}</p>
          </div>
          <div className='Product__Content__Rating'>
            <span>Calificación de Usuarios </span>
            <FontAwesomeIcon icon='star' className={rate.rate > .5 ? 'Product__Content__Rating__Checked' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon='star' className={rate.rate > 1.5 ? 'Product__Content__Rating__Checked' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon='star' className={rate.rate > 2.5 ? 'Product__Content__Rating__Checked' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon='star' className={rate.rate > 3.5 ? 'Product__Content__Rating__Checked' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon='star' className={rate.rate > 4.5 ? 'Product__Content__Rating__Checked' : ''}></FontAwesomeIcon>
            <p>{rate.rate + ' calificación de ' + rate.count + ' opiniones.'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}