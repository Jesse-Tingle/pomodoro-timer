import React, { useState } from "react"

const SetPomodoro = () => {
	const [newTimer, setNewTimer] = useState({
		work: 0.2,
		short: 0.1,
		long: 0.5,
		active: "work",
	})

	const handleChange = (input) => {
		const { name, value } = input.target
		switch (name) {
			case "work":
				setNewTimer({
					...newTimer,
					work: parseInt(value),
				})
				break
			case "shortBreak":
				setNewTimer({
					...newTimer,
					short: parseInt(value),
				})
				break
			case "longBreak":
				setNewTimer({
					...newTimer,
					long: parseInt(value),
				})
				break
			default:
				break
		}
	}
	const handleSubmit = (e) => {}
	return (
		<div className="form-container">
			<form noValidate onSubmit={handleSubmit}>
				<div className="input-wrapper">
					<input
						className="input"
						type="number"
						name="work"
						onChange={handleChange}
						value={newTimer.work}
					/>
					<input
						className="input"
						type="number"
						name="shortBreak"
						onChange={handleChange}
						value={newTimer.short}
					/>
					<input
						className="input"
						type="number"
						name="longBreak"
						onChange={handleChange}
						value={newTimer.long}
					/>
				</div>
				<button type="submit">Set Timer</button>
			</form>
		</div>
	)
}

export default SetPomodoro
