import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/computers", name: "Computers", imageUrl: "/pcgamer.jpg" },
	{ href: "/laptops", name: "Laptops", imageUrl: "/laptop.jpg" },
	{ href: "/earphones", name: "Earphones", imageUrl: "/audifonos.jpg" },
	{ href: "/microphones", name: "Microphones", imageUrl: "/microfono.jpg" },
	{ href: "/keyboards", name: "Keyboards", imageUrl: "/teclado.png" },
	{ href: "/mouse", name: "Mouse", imageUrl: "/mouse.jpg" },
	{ href: "/monitors", name: "Monitors", imageUrl: "/monitor.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-blue-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
				Discover the latest trends in the gaming world.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;