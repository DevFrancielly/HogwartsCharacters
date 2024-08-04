import './TextField.css'

const TextField = (props) => {

    const whenTyping = (event) => {
        props.whenChanged(event.target.value)
    }

    return(
        <div className='textField'>
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyping} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField