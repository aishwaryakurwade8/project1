import * as React from 'react';
import {Component} from 'react';

import  './ProductCss.css';

  
  class Product extends Component {
        constructor(props) {
          super(props);
          this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
          
        }
      
        componentDidMount() {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
            
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
                
              }
            )
        }
      
        render() {
          const { error, isLoaded, items } = this.state;
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
             <>
             <div>
               <h2>Products</h2> 
               
               <table>
                     <tr>
                       <th>ID</th>
                       <th>Title</th>
                       <th>Price</th>
                       <th>Select</th>
                       </tr>
                    {items.map(item => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>Select
    
            </td>
                        </tr>

                    ))} 

                 </table>
             </div>
            
             {/* <ProdDetails/> */}

             </> 
        );
       
          }
      
        }
      }
    
  
  export default Product;