import { Link } from "react-router-dom";
export default function ErrorPathPage() {
	return (
		<>
			<div>404 Not Found</div>
			<Link to="/">Return Home</Link>
		</>
	);
}
