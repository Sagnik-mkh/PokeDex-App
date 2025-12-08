import { Outlet, useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import Icons from "../../components/Icons/Icons";
import { useCallback } from "react";

function MainLayout() {
	/**
	 * ----------------------
	 * Render the main layout
	 * ----------------------
	 * @returns {JSX.Element} The main layout component
	 */
	const navigator = useNavigate();

	const goToHome = useCallback(
		function () {
			navigator("/");
		},
		[navigator]
	);

	return (
		<>
			<div className="flex justify-end px-12 mt-6">
				<button
					type="button"
					className="btn btn-accent flex"
					onClick={goToHome}
				>
					<i>
						<Icons iconName={"home"} />
					</i>
				</button>
			</div>
			<div className="flex flex-col gap-12 justify-center items-center">
				{/* Variable component */}
				<Outlet />

				{/* fixed component */}
				<Footer />
			</div>
		</>
	);
}

export default MainLayout;
