import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from "reactstrap";
import { FaRegThumbsUp, FaPlus, FaBatteryHalf,  FaRegThumbsDown} from 'react-icons/fa';
import Contatos from './components/contatos';
import Relogio from './components/Relogio';

const data = [ 
  {id: 1, nome: "Juan Gabriel", telefone: "20198682", Correio: "test@gmail.com"},
  {id: 2, nome: "Petra Perez", telefone: "20198773", Correio: "test@gmail.com"},
  {id: 3, nome: "Zancho Panza" , telefone: "20198625", Correio: "test@gmail.com"},
];

class App extends React.Component {
  state = {
    data: data,
    form: {
      id: "",
      nome: "",
      telefone: "",
      Correio: ""
    }, 
    dataSearch: [],
    modalInsertar: false,
    modalActualizar: false,
    modalConfirmacion: false
  };

  handleChange = e =>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
 
  //#region metodos de modales
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarConfirmacion = (dato) => {
    this.setState({
      form: dato,
      modalConfirmacion: true
    });
    
  };

  cerrarConfirmacion = () =>{
    this.setState({ modalConfirmacion: false });
  }
//#endregion
  
  //#region CRUD
  insertar = () =>{
    let valorNuevo = this.state.form;
    valorNuevo.id = this.state.data.length + 1;
    let lista = this.state.data;
    lista.push(valorNuevo)
    this.setState({data: lista, modalInsertar: false})
  }
  
  editar = (dato) =>{
    let contador = 0;
    let lista = this.state.data;
    lista.map((registro)=>{
      if(dato.id === registro.id){
        lista[contador].nome = dato.nome;
        lista[contador].telefone = dato.telefone;
        lista[contador].Correio = dato.Correio;
      }
      contador++;
    });
    this.setState({data: lista, modalActualizar: false})
  }

  eliminar = (dato) =>{
    let contador = 0; 
    let lista = this.state.data;
    lista.map((registro) => { 
        if(registro.id === dato.id){
          lista.splice(contador, 1);
        }
         contador++;
      });
      this.setState({data: lista, modalConfirmacion: false});
  }

  filtrar = (e) =>{
    const { value } = e.target;
    let lista = this.state.data;
    const filtered = lista.filter(fltr => fltr.nome.toLowerCase().includes(value.toLowerCase()));
    
    // this.setState({data: filtered});
    this.setState({ dataSearch: !value ?  [] : filtered});   
  }
  //#endregion

  render() {  
    return (
      <>     
        <nav className="navbar">
          <div className='nav'>
          <br />
            <ol>Refugiados no Brasil</ol>
            
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br /> 
            <form  class="d-flex">
              
              <input class="form-control me-2" onChange={this.filtrar} type="search" placeholder="Search" aria-label="Search"></input>              
            </form>
            <Button><FaBatteryHalf/></Button><ul><Relogio /></ul>
            </div>
        </nav>        
          
        <div className="uno">
                <h2>+Info</h2>
                <p >Documetos necessários:</p>

            <div className="uno-a">
                <div>                      
                        <div>
                            <h1>TOTI</h1>
                            
                            Toti é uma plataforma de ensino que forma refugiados e migrantes através de um curso preparado para atender as demandas das empresas.<br/>

                            Toti se preocupa principalmente em formar imigrantes residentes no Brasil e, em forma de coloca-los no mercado da tecnologia.<br/>
                            Não perca tempo, acesse o link da toti a baixo.

                            
                            <Button variant="primary">Saiba mais sobre toti</Button>
                        </div>
                     </div>  
                </div>
            </div>

            <div className="uno">
                <h2>+Info</h2>
                <p >Documetos necessários:</p>

            <div className="uno-a">
                <div>                      
                        <div>
                            <h1>TOTI</h1>
                            
                            Toti é uma plataforma de ensino que forma refugiados e migrantes através de um curso preparado para atender as demandas das empresas.<br/>

                            Toti se preocupa principalmente em formar imigrantes residentes no Brasil e, em forma de coloca-los no mercado da tecnologia.<br/>
                            Não perca tempo, acesse o link da toti a baixo.

                            
                            <Button variant="primary">Saiba mais sobre toti</Button>
                        </div>
                     </div>  
                </div>
            </div> 
            <div className="uno">
                <h2>+Info</h2>
                <p >Documetos necessários:</p>

            <div className="uno-a">
                <div>                      
                        <div>
                            <h1>TOTI</h1>
                            
                            Toti é uma plataforma de ensino que forma refugiados e migrantes através de um curso preparado para atender as demandas das empresas.<br/>

                            Toti se preocupa principalmente em formar imigrantes residentes no Brasil e, em forma de coloca-los no mercado da tecnologia.<br/>
                            Não perca tempo, acesse o link da toti a baixo.

                            
                            <Button variant="primary">Saiba mais sobre toti</Button>
                        </div>
                     </div>  
                </div>
            </div>



        <Container className='caixa'>  
        <br />
            <h1 className='titulo'>Cadastro de Estrangeiros</h1>
             
            <Button className='user' onClick={()=>this.mostrarModalInsertar()}><FaPlus/></Button>
           
           
          <Contatos
          
            data = {this.state.dataSearch.length ? this.state.dataSearch : this.state.data}
            eliminar = {this.mostrarConfirmacion}
            editar = {this.mostrarModalActualizar}
          />   
          <br/>
          <br/> 
        </Container>
        {/* Modal insertar */}
        <Modal isOpen = {this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Inserir Contato</h3>
            </div>       
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label> 
              <input className="form-control" readOnly type= "text" value = {this.state.data.length+1}/>
            </FormGroup> 

            <FormGroup>
              <label>Nome</label> 
              <input className="form-control" name="nome" type= "text" onChange={this.handleChange}/>
            </FormGroup> 

            <FormGroup>
              <label>Telefone</label> 
              <input className="form-control" name="telefone" type= "text" onChange={this.handleChange}/>
            </FormGroup> 
            <FormGroup>
              <label>E-mail</label> 
              <input className="form-control" name="Correio" type= "text" onChange={this.handleChange}/>
            </FormGroup> 
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}><FaRegThumbsUp /></Button>
            <Button color="danger" onClick={() => this.cerrarModalInsertar()}> <FaRegThumbsDown /></Button>
          </ModalFooter>
        </Modal>


        {/* Modal actualizar */}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
                <h3>Editar Contato</h3>
            </div>       
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>id:</label> 
              <input className="form-control" readOnly type= "text" value={this.state.form.id}/>
            </FormGroup> 

            <FormGroup>
              <label>Nome</label> 
              <input className="form-control" name="nome" type= "text" onChange={this.handleChange} value={this.state.form.nome}/>
            </FormGroup> 

            <FormGroup>
              <label>Telefone</label> 
              <input className="form-control" name="telefone" type= "text" onChange={this.handleChange} value={this.state.form.telefone}/>
            </FormGroup> 
            <FormGroup>
              <label>E-mail</label> 
              <input className="form-control" name="Correio" type= "text" onChange={this.handleChange} value={this.state.form.Correio}/>
            </FormGroup> 
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={()=>this.editar(this.state.form)}><FaRegThumbsUp /></Button>
            <Button color="danger" onClick={()=>this.cerrarModalActualizar()}> <FaRegThumbsDown /></Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen = {this.state.modalConfirmacion}>
          <ModalHeader>
            <h4> Deseja excluir este registro? </h4>
          </ModalHeader>
          <ModalBody>
            <Button color="success" onClick={()=> this.eliminar(this.state.form)}><FaRegThumbsUp /> </Button> {"   "}
            <Button color="danger" onClick={()=>this.cerrarConfirmacion()}> <FaRegThumbsDown /></Button>
          </ModalBody>        
        </Modal>      
      </>
    );
  }
}

export default App;