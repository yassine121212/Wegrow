/*import React, { useContext } from "react";
import styles from "./styles.module.css";
import AuthContext from "../../store/authcontext";

const Main = () => {
	const context = useContext(AuthContext);
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.setItem("isLoggedIn",0);
        
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				{context.isLoggedIn && <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>}
			</nav>
		</div>
	);
};

export default Main;*/