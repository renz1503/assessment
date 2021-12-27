import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
import { Timer } from './Timer.js';

export function ProductCard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [styleLinked, setStyleLinked] = useState([]);
    const addStyleLinked = (list) => { setStyleLinked(list) }
    const updateStyleLinked = (idProduct, style) => 
    { 
      setStyleLinked(styleList => styleList.map(s => 
        {
          if(s.id === idProduct){
            s.style = style;
          }
          return s;
        }));
    }

    useEffect(() => {
      setLoading(true);
      axios({
        method: 'GET',
        baseURL: 'https://fakestoreapi.com',
        url: '/products',
        params: {
          limit: '9'
        },
      })
        .then(({ data }) => 
          { 
            setProducts(data)
            const list = data.map(p => {return {id: p.id, style: 'Card'}})
            addStyleLinked(list)
          })
        .catch(() => {
          setError(true)})
        .finally(() => {
          setLoading(false);
        })
    }, [])
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Something went wrong. Try again later</p>
    
    return (
      <div className='Products'>
        {products.map(product => {
          return (
            <div className={styleLinked.find(x => x.id === product.id).style} key={product.id}>
              <Link className='Card__Link' to={`/detalle/${product.id}`} >
                <img className='Card__Link__Img' src={product.image} alt={product.title}/>
                <h3 className='Card__Link__Title'>{product.title}</h3>
                <p className='Card__Link__Id'>Código: {product.id}</p>
                <Timer updateStyleLinked={updateStyleLinked} idProduct={product.id}/>
              </Link>
            </div>
          )
        })}
      </div>
    );
}