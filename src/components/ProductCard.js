import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductCard.css'
import { Timer } from './Timer.js';

export function ProductCard() {
    const navigate = useNavigate();
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
      <>
        <h1>Products</h1>
        <div className='Products'>
          {products.map(product => {
            return (
              <div className={styleLinked.find(x => x.id === product.id).style} key={product.id}>
                  <img className='Card__Img' src={product.image} alt={product.title}/>
                  <h3 className='Card__Title'>{product.title}</h3>
                  <button className='Card__Btn' type="button" onClick={()=>navigate(`/detalle/${product.id}`)}>Go To Detail</button>
                  <Timer updateStyleLinked={updateStyleLinked} idProduct={product.id}/>
              </div>
            )
          })}
        </div>
      </>
    );
}