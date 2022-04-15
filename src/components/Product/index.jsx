import { toast } from 'react-toastify';
import './styles.css';

const Product = ({id, name, category, price, img, productList, currentSale, setCurrentSale}) => {

  

  function handleClick (productId) {

    const product = productList.find((product) => {
      
      return product.id === productId

    })

    if(currentSale.find((produto) => produto.id === product.id)){

      toast.error('ERRO: Produto já adicionado no carrinho!');

    } else {

      setCurrentSale([...currentSale, product]);
      toast.success('Produto adicionado com sucesso!')

    }
  }

  return (

    <>

      <li className='li__container'>
        <div className='img__container'>
          <img src={img} alt="product" />
        </div>
        <div className='info__container'>
          <h1 className='name__product'> {name} </h1>
          <p className='category__product'> {category} </p>
          <p className='price__product'> R$ {price} </p>
        </div>
        <div className='btn__container'>        
            <button className='btn__buy' onClick={() => handleClick(id)}> Adicionar </button>
        </div>
      </li>
    
    </>

  )

}
export default Product;