import { log } from "console";
import getProducts from "./actions/get-products";
import { Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Product from "./product";

export default async function Products() {
	const products = await getProducts();
	log(products);

	return (
		<Grid2 container spacing={3} >
			{products.map((product) => (
				<>
					<Grid key={product.id} sm={6} lg={4} xs={12} className="flex justify-center m-2 p-2 ">
						<Product product={product} />

					</Grid>
				</>
			))}
		</Grid2>
	)
	
}