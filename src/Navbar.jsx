const Navbar = () => {
	return (
		<nav className="flex justify-between p-3 border-b ">
			<a
				href="/"
				className="text-red-500 font-quicksand text-3xl font-bold">
				The Blog
			</a>
			<div className="text-red-500 font-quicksand font-bold pt-1 pr-4">
				<a
					className="mr-10"
					href="/">
					Home
				</a>
				<a href="/create">New Blog</a>
			</div>
		</nav>
	);
};

export default Navbar;
