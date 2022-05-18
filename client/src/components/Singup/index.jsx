import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		phone: "",
		Address: "",
 		city: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	var states = new Array("Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Sidi Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit");
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						
						<input
							type="text"
							placeholder="Nom d'utilisateur"
							name="userName"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
 							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
					
        <select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
		  type="text"
 							name="city"
 							onChange={handleChange}
							value={data.city}
							required
         >  
	    { states.map(state => <option value={state}>{state}</option> )};

        
        </select>
      
						<input
							type="text"
							placeholder="Address"
							name="Address"
							onChange={handleChange}
							value={data.Address}
							required
							className={styles.input}
						/>
					 
						<input
							type="tel"
							placeholder="phone"
							name="phone"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							onChange={handleChange}
							value={data.phone}
							required
							className={styles.input}
						/>
						<p>Format: 123-456-7890</p>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;