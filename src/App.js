import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {
      name: 'Photoshop',
      price: '$69.99'
    },
    {
      name: 'Ilistator',
      price: '$50'
    },
    {
      name: 'Indesign',
      price: '$45.5'
    },
    {
      name: 'Yo YO',
      price: '$45.5'
    }
  ];
  const friends = ['Nur-Alom', 'Akash', 'Munna', 'Rafi', 'Apu', 'Shishir']
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
        </ul>

        {
          products.map(product=><Product product={product}></Product>)
        }
        <Person name="Mohammad Emon" job="Programming"></Person>
        <Person name="Al Siam" job="Programming"></Person>
        <Person name="Fazly Rabby" job="Student"></Person>
        <Person name="Bellal Hossaim" job="Businessman"></Person>

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[]) 
  return(
    <div className="">
      <h3>Dynamic Users: {users.length}</h3>
      {
       users.map(user => <li>{user.phone}</li>)
      }
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div className="">
      <h1>Count: {count}</h1>
      <button onMouseOver={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const { name, price } = props.product;
  return (
    <div className='product-box'>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div className="box">
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.job}</p>
    </div>
  );
}

export default App;
