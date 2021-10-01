import * as React from "react"
import { useState } from "react" // 훅에 제네릭<> 을 잘 이용하자 제네릭은 타입추론을 유용하게 한다

const RSP = () => {
	
	const rspCoords = {
		바위: '0',
		가위: '-142px',
		보: '-284px'
	} as const
	
	const scores = {
		가위: 1,
		바위: 0,
		보: -1
	} as const // 가위 바위 보를 모두 number로 인식하기 때문에 as const를 통해 정의 된 값 그대로 값을 읽는다
	
	const [imgCoords, setImgCoords] = useState<a>(rspCoords.바위) // type a = typeof rspCoords[keyof typeof rspCoords] "0" | "-142px" | "-284px"
	
	// type a = typeof rspCoords
	// type a = {
	// 	readonly 바위: '0';
	// 	readonly 가위: '-142px';
	// 	readonly 보: '-284px';
	// }
	
	// type a = keyof typeof rspCoords "바위" | "가위" | "보"
	
	// type a = typeof rspCoords[keyof typeof rspCoords] "0" | "-142px" | "-284px"
	
	// Object.keys 는 string[]을 반환한다고 되어 있음 Issue 강제 형변환 (<타입>객체) or (객체 as 타입)
	
	const onClickBtn = (choice: keyof typeof rspCoords) => () => {
		
	}
	
	return (
		<div></div>
	)
}

export default RSP