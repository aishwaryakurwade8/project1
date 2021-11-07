
import React,{useEffect,useState} from 'react';

function ProdDetails() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table>
                     <tr>
                       <th>ID</th>
                       <th>Title</th>
                       <th>Price</th>
                       <th>Description</th>
                       <th>Category</th>
                       <th>Image</th>
                       {/* <th>Rating</th> */}


                       </tr>
                    {items.map(item => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.description}</td>
                          <td>{item.category}</td>
                          <td>{item.image}</td>
                          {/* <td>{item.rating}</td> */}

                        </tr>
                    ))} 
        </table>
      );
    }
  }
  export default ProdDetails;