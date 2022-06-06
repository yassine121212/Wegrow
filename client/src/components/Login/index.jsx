import { useState,useContext,useReducer,useRef,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import AuthContext from "../../store/authcontext";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import Svgs from "../UI/logbg"
//import Context from "@mui/base/TabsUnstyled/TabsContext";
	// eye
	


const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
	  return { value: action.val, isValid: action.val.includes("@") };
	}
  
	if (action.type === "INPUT_BLUR") {
	  return { value: state.value, isValid: state.value.includes("@") };
	}
  
	return { value: "", isValid: true };
  };
const passwordReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
	  return { value: action.val, isValid: action.val.trim().length > 6 };
	}
  
	if (action.type === "INPUT_BLUR") {
	  return { value: state.value, isValid: state.value.trim().length > 6 };
	}
  
	return { value: "", isValid: true };
  };
const Login = () => {
	const [StateEye,SetStateEye] = useState(false)
	const toggleBtn = () =>{
		SetStateEye(prevState =>!prevState);
	}
	const [email, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: true,
	  });

	  const [password, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: true,
	  });
	  const [data, setData] = useState({ email,password});
	  
	  const [formIsValid, setFormIsValid] = useState(false);

	const [error, setError] = useState("");
    const context = useContext(AuthContext);
    const {setId} = useContext(AuthContext);
	const { isValid: emailIsValid } = email;
	const { isValid: passwordIsValid } = password;
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
 
	  useEffect(() => {
		
	 
		  setFormIsValid(emailIsValid && passwordIsValid);
 
		 
	  }, [emailIsValid, passwordIsValid]);
	  useEffect(() => {
		setData({email:emailInputRef.current.value,password:passwordInputRef.current.value})

	  }, [email,password])
	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
	 
	  };
	
	  const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
	
		setFormIsValid(email.isValid && password.isValid);
	  };
	
	  const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	  };
	
	  const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	  };
 

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {

			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			if(res){
 			localStorage.setItem("token", res.data)
			localStorage.setItem("username",res.user.userName)
			localStorage.setItem("id",res.user._id)
			localStorage.setItem("isLoggedIn",1)
            
		}
		

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
	const submitHandler = async (event) => {
		event.preventDefault();
		if (formIsValid) {
		await handleSubmit(event);
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
		if (storedUserLoggedInInformation === "1") { 	
			window.location = "/";

		  }
		
		} else if (!emailIsValid) {
		  emailInputRef.current.focus();
		} else {
		  passwordInputRef.current.focus();
		}
	  };
 	return (
		 <>
		 <div>
           <Svgs/>
		 </div>
		 <div className={styles.uplog}>
			 
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={submitHandler}>
						<h1>Login to Your Account</h1>
						<input
						    ref={emailInputRef}
							type="email"
							placeholder="Email"
							name="email"
							onChange={emailChangeHandler}
							onBlur={validateEmailHandler}

							value={email.value}
							required
							className={`${styles.input} ${!email.isValid && styles.eroremail}`}
						/>
						<div>
 						<input
						    ref={passwordInputRef}
							type={StateEye ? "text" : "password"}
							placeholder="Password"
							name="password"
							onChange={passwordChangeHandler}
							onBlur={validatePasswordHandler}
							value={password.value}
							required
							className={`${styles.input} ${!password.isValid && styles.eroremail}`}
						/>
						<button className={styles.eye} onClick={ toggleBtn}>
						{
					        StateEye ? <AiOutlineEyeInvisible/>: <AiOutlineEye/>
						}
						</button>
						</div>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		</div>
		</>
	);
};

export default Login;