import './Collaborator.css'

const Collaborator = ({img, name, office, accentColor}) => {
    
    return(
        <div className='collaborator'>
            <div className='header' style={{backgroundColor: accentColor}}> 
                <img src={img} alt={name}/>
            </div>

            <div className='footer'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}

export default Collaborator