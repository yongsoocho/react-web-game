import * as React from "react"
import { useState, useRef, useCallback } from "react"

const AppTwo = () => {
	
	const [word, setWord] = useState("조용수")
	const [value, setValue] = useState("")
	const [result, setResult] = useState("")
	const inputEl = useRef<HTMLInputElement>(null)
	
	const onSubmitForm = useCallback((e: React.FormEvent) => { // useCallback 의 제네릭으로 < (e: ChangeEvent<HTMLInputElement>) => void > 도 가능
		e.preventDefault()
		if(value.length < 2) return setResult("최소 2자 이상 입력하세요")
		if(word[word.length - 1] === value[0]) {
			setResult("정답!!")
			setWord(value)
			return setValue("")
		}
		if(word === value) {
			setResult("다른 단어 입력!!")
			return setValue("")
		}
		setValue("")
		return setResult("땡")
	}, [value])
	
	const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
		setValue(e.target.value)
	}, [])
	
	return (
		<div>
			<p>단어: {word}</p>
			<form onSubmit={onSubmitForm}>
				<input ref={inputEl} onChange={onChange} />
				<input type="submit" value="제출!!" />
			</form>
			<p>{result}</p>
		</div>
	)
}

export default AppTwo