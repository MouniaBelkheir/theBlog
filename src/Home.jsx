
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
	const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")
		
	
	
	return (
		<div className="">
			{error && (
				<div className="text-white text-center p-8">
					{error}
				</div>
			)}
			{isPending && <div className="text-white">Loading...</div>}
			{blogs && (
				<BlogList
					blogs={blogs}
					title="All Blogs"
				/>
			)}
		</div>
	);
};

export default Home;
