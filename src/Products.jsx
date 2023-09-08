import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <div>Please Wait..!</div>;
  };
  const filterProduct=(cat)=>{
    const updatedList=data.filter((x)=>x.category===cat);
    setFilter(updatedList);

  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2"onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Women's clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>
            Men's clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("kids")}>
            Kids
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>
            Jewelery
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>
            Electronics
          </button>
        </div>

        {filter.map((product, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <a href="#" class="btn btn-outline-dark">Buy Now</a> 
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  // Return the component content here
  return <div>{loading ? <Loading /> : <ShowProducts />}</div>;
};

export default Products;