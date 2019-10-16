import React , {useState} from 'react'

export default function Items(props){

	const [edit , setEdit] = useState(false)

	const deleteItem = () =>{
		props.deleteState(props.index)
	}
	const startEdit =()=>{
		setEdit(true)
	}
	const finishEdit =()=>{
		setEdit(false)
	}
	const changeText = () =>{
		props.updateState(document.getElementById('1').value , props.index)
	}

	if(!edit){
		return(
			<div className="box">
				<div>{props.children}</div>
				<div className='buttons'>
					<button className='editButton' onClick={startEdit}>Edit</button>
					<button className='deleteButton' onClick={deleteItem}>Delete</button>	
				</div>		
			</div>
		)
	}
	else{
		return(
			<div className="box">
				<textarea defaultValue={props.children} id='1' onChange={changeText}></textarea>
				<div className='buttons'>
					<button className='editButton' onClick={finishEdit}>Done</button>
					<button className='deleteButton' onClick={deleteItem}>Delete</button>	
				</div>		
			</div>
		)
	}
}

