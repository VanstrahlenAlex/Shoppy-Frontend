
import Image from "next/image";
import getMe from "./get-me";
import { redirect } from "next/navigation";
import CreateProductFab from "./products/create-product/create-product-fab";
import getProducts from "./products/actions/get-products";
import Products from "./products/products";

export default async function Home() {
	const me = await getMe();
	// console.log(me);
	// console.log(me.message);

	if (typeof me === 'object' && me !== null && 'message' in me && me.message === "Unauthorized") {
		redirect("/auth/login");
	}

	const products = await getProducts();
	console.log(products);
	
	
	return (
		<>
			<Products />
			<CreateProductFab />
		</>
	);
}
