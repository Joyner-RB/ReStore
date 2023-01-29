import { Grid } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";
interface Props{
    products: Product[]
}
export default function ProductList({products}: Props){
    return(
        <Grid container spacing={4}>
            {products.map(Product =>(
                <Grid item xs={3} key={Product.id}>
                    <ProductCard product={Product}/>
                </Grid>
            ) )}
        </Grid>
    )
}