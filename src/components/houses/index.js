import Collaborator from '../collaborator'
import './Houses.css'

const Houses = (props) => {

    return(
        (props.collaborators.length > 0) ? <section className='houses' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.nome}</h3>

            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator accentColor={props.primaryColor} key={collaborator.nome} name={collaborator.nome} office={collaborator.cargo} img={collaborator.imagem}/>)}
            </div>
        </section>
        : ""
    )
}

export default Houses
