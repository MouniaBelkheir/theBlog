import PropTypes from "prop-types";

const BlogList = ({ blogs, title }) => {
	return (
		<div className=" font-quicksand flex flex-col items-center ">
			<h1 className="text-3xl font-bold m-5 text-red-500">{title}</h1>
			{blogs.map((blog) => (
				<div
					key={blog.id}
					className="w-2/3 md:w-1/3 lg:w-1/3 border border-slate-400  m-4 p-4 rounded-lg hover:bg-[#192a22] text-white  active:bg-[#214d38] focus:outline-none focus:ring focus:ring-violet-300 hover:drop-shadow-2xl backdrop-blur-lg brightness-200">
					<h2 className="text-red-600 text-3xl p-3">{blog.title}</h2>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

BlogList.propTypes = {
	blogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			content: PropTypes.string,
			author: PropTypes.string,
		})
	),
	title: PropTypes.string,
};

export default BlogList;
