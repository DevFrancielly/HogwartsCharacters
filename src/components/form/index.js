import Button from '../button'
import DropdownList from '../dropdownList'
import TextField from '../textField'
import './Form.css'

const Forms = () => {

    const hogwartsHouses = [
        "Grifinoria",
        "Sonserina",
        "Corvinal",
        "Lufa-Lufa"
    ]

    const whenSaving = (evento) => {
        evento.preventDefault()
        console.log("foi carai")
    }

    return(
        <section className='form'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropdownList obrigatorio={true} label="Casa" itens={hogwartsHouses}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
} 

export default Forms