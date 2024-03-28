import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			id: 1,
			title: "My First Blog",
			content: "lorem ipsum",
			author: "Mario",
		},
		{
			id: 2,
			title: "My Second Blog",
			content: "lorem ipsum",
			author: "Luigi",
		},
		{
			id: 3,
			title: "My Third Blog",
			content: "lorem ipsum",
			author: "Princess Peach",
		},
	]);
	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	}

	return (
		<div className="">
			<BlogList
				blogs={blogs}
				title="All Blogs"
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default Home;
