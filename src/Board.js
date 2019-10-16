import React,{useState} from 'react';
import './index.css';
import Items from './Item';


export default function Board() {

	const [list , setList ] = useState(['asdf','1234','qwer'])

	const deleteState = index =>{
		let newList = [...list]
		newList.splice(index, index+1)
		setList(newList)
	}

	const addState = () =>{
		let newList = [...list]
		newList.push("Default Value")
		setList(newList)
	}

	const updateState = (value , index) =>{
		let newList = [...list]
		deleteState(index)
		newList.splice(index , index+1 , value)
		setList(newList)
	}
	
	return (
		<div>
			<button className='addButton' onClick={addState}>Add</button>
			<div className='board'>
				{list.map(  (text , i)=> 
					<Items 
						key={i} 
						index={i} 
						deleteState={deleteState} 
						updateState={updateState}
					>{text}</Items> )}
			</div>
		</div>
	);
}




