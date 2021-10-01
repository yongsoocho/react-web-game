import * as React from "react"
import { useState, useRef, useCallback } from "react" // import 에서는 const 쓰지말자! 동작은 하는데 타입추론에 안좋다 interface 못 가져옴

const Response = () => {
	
	const [state, setState] = useState("클릭해서 시작")
	const [message, setMessage] = useState("클릭해서 시작")
	const [result, setResult] = useState<number[]>([]) // 빈 배열은 항상 에러가 난다 as 를 활용해보자
	const timeout = useRef<number | null>(null) // !(null or undefined가 아닐 것) 를 뒤에 붙이던지 if(timeout) 을 이용하던지 해라
	const startTime = useRef(0) // useRef는 3가지가 있다 1. refObject리턴 2.MutableRefObject리턴 initial 값에 따라 정해짐
	const endTime = useRef(0) // state는 값을 바꾸면 리렌더링, ref는 리렌더링 없음
	
	const onClickScreen = useCallback(() => {
		setTimeout(() => { // browser setTimeout 인지 NodeJS setTimeout 인지 헷갈려함 window. 으로 하거나 형변환
			console.log("Hi")
		}, 1000)
	}, [state])
	
	const onReset = useCallback(() => { // jsx에 들어가는 함수는 onClick onSubmit 은 useCallback 으로 감싸자..
		setResult([])
	}, [])
	
	const renderAverage = () => {
		return result.length === 0 
			? null 
			: <React.Fragment>
					<div>평균 시간: {result.reduce((a, c) => a + c) / result.length} ms</div>
					<button onClick={onReset}>리셋</button>
				</React.Fragment>
	}
	
	return (
		<React.Fragment>
			<div id="screen" className={state} onClick={onClickScreen} >
			</div>
			{renderAverage()}
		</React.Fragment>
	)
}

export default Response