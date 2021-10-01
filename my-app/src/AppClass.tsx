import * as React from "react"

interface iState {
	first: number;
	second: number;
	value: string;
	result: string;
}

class AppClass extends React.Component<{}, iState> { // 1번째 자리는 props, 2번째 자리는 state
	
	state = {
		first: Math.ceil(Math.random()*9),
		second: Math.ceil(Math.random()*9),
		value:"",
		result:""
	}
	
	onSubmit = (e: React.FormEvent<HTMLFormElement>) => { // FromEvent ChangeEvent 등..
		e.preventDefault()
		if(parseInt(this.state.value) === this.state.first * this.state.second) {
			this.setState((prevState) => {
				return {
					result: "정답!",
					first: Math.ceil(Math.random() * 9),
					second: Math.ceil(Math.random() * 9),
					value: "",
					// result: "" // 왜 Error 가 나올까
				}
			})
			if(this.input) this.input.focus() // input!.focus() 처럼 ! 를 쓰면 됨
		} else {
			this.setState((prevState) => {
				return {
					...prevState,
					value: "땡!",
					result:""
				}
			})
		}
	}
	
	
	onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ value: e.target.value })
	}
	
	
	input: HTMLInputElement | null = null
	
	
	// onRefInput = (c) => { this.input = c }
	
	
	// render() {
	// 	<React.Fragment>
	// 		<div>{this.state.first} 곱하기 {this.state.second} 는?</div>
	// 		<form onSubmit={this.onSubmit}>
	// 			<input
	// 				ref={this.onRefInput}
	// 				type="number"
	// 				value={this.state.value}
	// 				onChange={this.onChange}
	// 			/>
	// 		</form>
	// 		<div>{this.state.result}</div>
	// 	</React.Fragment>
	// }
	
}

export default AppClass