import './styles.css';
import Product from '../Product';

const ProductList = ({productList, currentSale,  setCurrentSale}) => {

  return (

    <>
      <ul className='list__products'>

        {productList.map(({id, name, category, price, img}) => 
        
          <Product key={id} id={id} name={name} category={category} price={price.toFixed(2).replace('.',',')} img={img} productList={productList} currentSale={currentSale} setCurrentSale={setCurrentSale}/>

        )}

      </ul>
      
    </>
  )

}
export default ProductList;