import './DropdownList.css'

const DropdownList = (props) =>{
    return(
        <div className='dropdownList'>
            <label> required={props.obrigatorio} {props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList

