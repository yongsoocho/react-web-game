import * as React from "react"
import { useState, useRef } from "react" // or React.useState
import AppTwo from "./AppTwo"
import Baseball from "./Baseball"
import Response from "./Response"
import RSP from "./RSP"

const App = () => {
	const [first, setFirst] = useState<number>( Math.ceil(Math.random() * 9) ) // Hooks 에는 제네릭 타입을 쓸 수 있다
	const [second, setSecond] = useState( Math.ceil(Math.random() * 9) )
	const [value, setValue] = useState("")
	const [result, setResult] = useState("")
	
	const inputEl = useRef<HTMLInputElement>(null) // useRef 는 제네릭이 가능
	
	const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => { // FromEvent ChangeEvent 등..
		e.preventDefault()
		const input = inputEl.current
		if(parseInt(value) === first * second) {
			setResult("정답!")
			setFirst( Math.ceil(Math.random() * 9) )
			setSecond( Math.ceil(Math.random() * 9) )
			setValue('')
			if(input) input.focus() // input!.focus() 처럼 ! 를 쓰면 됨
		} else {
			setResult("땡!")
			setValue('')
		}
	}
	
	return (
		<>
			<div>{first} 곱하기 {second} 는?</div>
			<form onSubmit={onSubmitForm}>
				<input
					ref={inputEl}
					type="number"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</form>
			<div>{result}</div>
			<hr/>
			<div>
				<AppTwo />
			</div>
			<hr/>
			<div>
				<Baseball />
			</div>
			<hr/>
			<div>
				<Response />
			</div>
			<hr/>
			<div>
				<RSP />
			</div>
		</>
	)
}

export default App