import "./Product.jsx"; 
import Price from "./Price.jsx"
export default function Product({title,idx,style}){
  let oldPrices=["3642","1362","1234","100"];
  let newPrices=["1234","13352","1424","2340"];
  let desc=[["hihuhu","jahcsashas"],["jhadf","ahffhjfabf"],["hgevfv","djhgfhfb"],["iuaegf","GSDVDDVDd"]];
      return(
        <>
        <div className="Product" style={style}>
           <p>{title}</p>
           <p>{desc[idx] [0]}</p>
           <p>{desc[idx] [1]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
        </>
      );
}