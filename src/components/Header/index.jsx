import './styles.css';
import logo         from '../../assets/image/logo.svg';
import { useEffect, useState } from 'react';

const Header = ({products, filteredProducts, setFilteredProducts}) => {

  const [search, setSearch] = useState('');

  useEffect(()=>{
    showProducts(search)
  },[search])
  
  function showProducts () {

    setFilteredProducts(products.filter(product => product.category.toLowerCase().includes(search) || product.name.toLowerCase().includes(search)))

  }
  
  return (

    <>
      <header>
        <img className='image__logo' src={logo} alt="logotipo" />
        <div className='search__box'>
          <input  
            className='input__search'
            value={search} 
            type="text" 
            placeholder='Digitar Pesquisa' 
            onChange={(event) => setSearch(event.target.value)} 
            onKeyDown={(event) => {if (event.key === 'Enter') showProducts(event.target.value.toLowerCase())}}
          />

          <button
           className='btn__search'
           onClick={() => showProducts(filteredProducts)}

          > Pesquisar </button>

        </div>
      </header>
    
    
    </>

  )

}
export default Header;