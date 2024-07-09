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

    return(
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite seu nome"/>
                <TextField label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropdownList label="Casa" itens={hogwartsHouses}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
} 

export default Forms