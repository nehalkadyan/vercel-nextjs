
export default function Details({product}){
    if(!product){
        return(
            <div>Loading...</div>
        )
    }
    return(
        <div>
            <h1>Product Details</h1>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {id: "1"}},
            {params: {id: "2"}},
            {params: {id: "3"}}
        ],
        fallback : true
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    return{
        props: {
            product : data.find(item => item.id == params.id)
        }
    }
}



