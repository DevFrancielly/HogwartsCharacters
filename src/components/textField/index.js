import './TextField.css'

const TextField = (props) => {
    return(
        <div className='textField'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField