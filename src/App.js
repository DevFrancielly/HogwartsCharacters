import Banner from './components/banner';
import TextField from './components/textField';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextField label="Nome" placeholder="Digite seu nome"/>
      <TextField label="Cargo" placeholder="Digite seu cargo"/>
      <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;
