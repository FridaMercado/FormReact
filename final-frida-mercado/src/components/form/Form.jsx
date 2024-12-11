import {useState} from "react";
import styles from "./Form.module.css";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		lastname: "",
		address: "",
		email: "",
		phone: "",
	});
	const [showSummary, setShowSummary] = useState(false);
	const [errors, setErrors] = useState({
		name: false,
		lastname: false,
		address: false,
		email: false,
		phone: false,
	});

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const regexAddress = /^[a-zA-Z0-9\s,]+$/;
		const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		const regexPhone = /^[0-9]{10,14}$/;

		let errorsCustom = {
			name: formData.name.trim().length <= 3,
			lastname: formData.lastname.trim().length <= 3,
			address: !regexAddress.test(formData.address),
			email: !regexEmail.test(formData.email),
			phone: !regexPhone.test(formData.phone),
    };
    
    setErrors(errorsCustom);

    if (Object.values(errorsCustom).some(error => error)) {
    return;
    }

    setShowSummary(true);

	};

	return (
		<div className={styles.formWrapper}>
			{!showSummary ? (
				<>
					<h2>Subscribe to our newsletter!</h2>
					<form className={styles.formContainer} onSubmit={handleSubmit}>
						<div className={styles.formGroup}>
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								name="name"
								id="name"
								value={formData.name}
								onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>Name is required</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="lastname">Lastname:</label>
							<input
								type="text"
								name="lastname"
								id="lastname"
								value={formData.lastname}
								onChange={handleChange}
              />
              {errors.lastname && <p className={styles.error}>Lastname is required</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="address">Country of Residence:</label>
							<input
								type="text"
								name="address"
								id="address"
								value={formData.address}
								onChange={handleChange}
              />
              {errors.address && <p className={styles.error}>This field is required</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="email">Mail:</label>
							<input
								type="email"
								name="email"
								id="email"
								value={formData.email}
								onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>This field is required</p>}
						</div>
						<div className={styles.formGroup}>
							<label htmlFor="phone">Phone:</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								value={formData.phone}
								onChange={handleChange}
              />
						</div>
						<button className={styles.submitButton} type="submit">
							SEND
						</button>
					</form>
				</>
			) : (
				<>
					<h2>User Info</h2>
					<section className={styles.summary}>
						<p>Thank you, <span>{formData.name} {formData.lastname}</span></p>
						<p>You live in: <span>{formData.address}</span></p>
						<p>Your mail is: <span>{formData.email}</span></p>
						<p>Your phone number is: <span>{formData.phone}</span></p>
					</section>
				</>
			)}
		</div>
	);
};

export default Form;
