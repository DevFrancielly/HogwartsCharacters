import { useState } from 'react'
import Button from '../button'
import DropdownList from '../dropdownList'
import TextField from '../textField'
import './Form.css'

const Forms = (props) => {

    // console.log(props)

    // const hogwartsHouses = [
    //     "Grifinoria",
    //     "Sonserina",
    //     "Corvinal",
    //     "Lufa-Lufa"
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')

    const whenSaving = (event) => {

        event.preventDefault()
        props.registredCollaborator({
            nome,
            cargo,
            imagem,
            casa
        })

        setNome('')
        setCargo('')
        setImagem('')
        setCasa('')
    }

    return(
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={nome}
                    whenChanged={value => setNome(value)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={cargo}
                    whenChanged={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    whenChanged={value => setImagem(value)}
                />
                <DropdownList 
                    obrigatorio={true} 
                    label="Casa" 
                    itens={props.houses}
                    value={casa}
                    whenChanged={value => setCasa(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    )
} 

export default Forms