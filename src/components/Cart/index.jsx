import { toast } from 'react-toastify';
import './styles.css';

const Cart = ({currentSale, setCurrentSale, cartTotal, setCartTotal}) => {

  const remove = (id) => {
    setCurrentSale(currentSale.filter(product => product.id !== id));
    toast.success('Produto removido com sucesso!')
  }

  const removeAll = () => {
    setCurrentSale([]);
    toast.success('Carrinho limpo!');
  }

  const totalPrice =  currentSale.reduce((acc, cur) => {

    return cur.price + acc;

  }, 0).toFixed(2).replace('.', ',');


  return (

    <>

      { currentSale.length === 0 ?
      
      <div className='cart'>
        <span className='header__cart'>
          <p> Carrinho de Compras </p>
        </span>
        <div className='cart__empty'>
          <h1> Sua sacola está vazia</h1>
          <p> Adicione itens </p>
        </div>
      </div>

      : 

        <div className='cart'>
          <span className='header__cart'>
            <p> Carrinho de Compras </p>
          </span>
          <div className='buyList__cart'>
            <ul className='buyList'>

              {currentSale.map((item) => 
            
                <li key={item.id} className='buyList__item'>
                  <img src={item.img} alt="" />
                  <div className='name__category__container'>
                    <h4 className='name__prod'> {item.name} </h4>
                    <p> {item.quantidade} </p>
                    <p> {item.category} </p>
                  </div>
                  <span className='removeItem__container'>
                    <button className='removeItem__cart' onClick={() => remove(item.id)}> Remover </button>
                  </span>
                </li>       
            
              )}
            </ul>
          </div>
          <div>
            <span className='totalPrice__container'>
              <h4> Total </h4>
              <p> R$ {totalPrice} </p>
            </span>
            <div className='btn__removeAll'>
              <button onClick={() => removeAll()} > Remover todos </button>
            </div>
          </div>      
        </div>     
      }

    </>

  )

}
export default Cart;