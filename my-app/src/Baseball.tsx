import * as React from "react"
import { useState, useRef, useCallback } from "react"
import Try from "./Try"

const getNumbers = () => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const array = []
	for(let i = 0; i < 4; i += 1) {
		const choosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
		array.push(choosen)
	}
	return array
}

export interface iTryInfo {
	try: string;
	result: string;
}

const BaseBall = () => {
	
	const [tries, setTries] = useState<iTryInfo[]>([]) // 빈 배열은 항상 문제를 일으킨다 훅 제네릭<> 으로 에러 없애기
	const [answer, setAnswer] = useState(getNumbers())
	const [value, setValue] = useState("")
	const [result, setResult] = useState("")
	const inputEl = useRef<HTMLInputElement>(null) // null 때문에 타입추론 Error가 뜰 수도 있다 제네릭<> 으로 막자!
	
	const onSubmitForm = useCallback<(e: React.FormEvent) => void>(e => {
		e.preventDefault()
		const input = inputEl.current
		let i: string = "1";
		if(tries.length !== 0) {
			i = String(tries.length + 1)
		}
		const arr = tries.concat({ try: i, result: "unknown" })
		setTries(arr)
	}, [tries, answer])
	
	const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(e => {
		e.preventDefault()
		setValue(e.target.value)
	}, [])
	
	return (
		<React.Fragment>
			<p>시도: {tries.length}</p>
			<form onSubmit={onSubmitForm}>
				<input ref={inputEl} onChange={onChange} />
				<input type="submit" value="제출!!!" />
			</form>
			<div></div>
			{tries.map((item, index) => (<Try key={index} tryInfo={item} />))}
			{result === "정답" ? <p>{result} 정답은 {answer}</p> : <p></p>}
		</React.Fragment>
	)
}

export default BaseBall