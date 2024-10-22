import Product from "./Product.jsx"; 
export default function ProductTab(){
  let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
  };
  let productStyle = {
    border: "2px solid black",
    borderRadius:"10px",
    margin: "10px",
   // padding: "0 10px 0 10px",
    width:"200px",
    height:"190px",
  }; 
      return(
        <>
        <div className="Product" style={styles}>
        
            <Product title="ABCdhfSJHBF" idx={0} style={productStyle}/>
            <Product title="PQRDYDGFDGFD" idx={1} style={productStyle}/>
            <Product title="LMNSHSGDAJSG" idx={2} style={productStyle}/>
            <Product title="XYZHJASGFAS" idx={3} style={productStyle}/>
        </div>
        </>
      );
}