import * as React from "react"
import { iTryInfo } from "./Baseball"

// React.FunctionComponent<propTypes>
const Try: React.FunctionComponent<{ tryInfo: iTryInfo }> = props => {
	const { tryInfo } = props
	
	return (
		<div>{tryInfo.try} {tryInfo.result}</div>
	)
}
// PropTypes 쓰지마!
export default Try