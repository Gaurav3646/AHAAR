import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { UserAuth } from "../context/AuthContext";
import Product from "../components/Product";
import classes from "../pages/Search.module.css";
// import { TbSearch } from "react-icons/tb";
const Search=()=>{
    const { user } = UserAuth();
    const [products, setProducts] = useState([]);
    const [qquery,setQquery]=useState("");

    const changeHandler=(e)=>{
       setQquery(e.target.value);
    };

    useEffect(() => {
        const res = async () => {
          const productsRef = collection(db, "Products");
          // Create a query against the collection.
          const q = query(productsRef);
          const querySnapshot = await getDocs(q);
          // console.log(querySnapshot);
          const response = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setProducts([...response]);
          console.log(products, "*");
        };
        res();
      }, []);
return(
<div>
  <div className={classes.form_field}>
    <input type="text" className={classes.search_bar} placeholder="type here...." onChange={changeHandler}></input>
    {/* <TbSearch className={classes.search_btn}/> */}
    </div>
    <div className={classes.products}>
        {products.filter((product)=>
        product.desc.toLowerCase().includes(qquery)
        ).map((product)=>(
          <Product
          image={product.photoURL}
          title={product.desc}
          category={product.type}
          quantity={product.countP}
          expiry={product.date}
          id={product.id}
          text="Detail Description"
        />
        ))}
    </div>
</div>
);
};

export default Search;