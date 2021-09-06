import React from "react"
import "./time_tracker.sass"

function TimeTracker() {
	return (
		<div className="main-contianer">
			<div className="circle one"></div>
			<div className="circle short_break"></div>
			<div className="circle two"></div>
			<div className="circle short_break"></div>
			<div className="circle three"></div>
			<div className="circle long_break"></div>
		</div>
	)
}

export default TimeTracker
