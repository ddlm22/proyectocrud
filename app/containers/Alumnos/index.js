/*
 *
 * Alumnos
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAlumnos from './selectors';
import messages from './messages';

export class Alumnos extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    alumnos: [
      {
        nombre: 'joselo',
        numControl: '1417567',
        semestre: 0,
        carrera: 'Tics',
      },
      {
        nombre: 'joselo',
        numControl: '1417567',
        semestre: 0,
        carrera: 'Tics',
      },
      {
        nombre: 'joselo',
        numControl: '1417567',
        semestre: 0,
        carrera: 'Tics',
      },
    ],
    open: false,
    Nombre: '',
    numControl: '',
    semestre: -1,
    carrera: '',
  };

  handleOpen = () => {
  this.setState({open: true});
};

handleClose = () => {
  this.setState({open: false});
};

handleCreateNewStudent = () =>{
  const {
    nombre,
    numControl,
    semestre,
    carrera,
    alumnos,
  } = this.state;
  const newStudent = {
    nombre,
    numControl,
    semestre,
    carrera,
  };

  alumnos.push(newStudent);
  this.setState({alumnos, open: false});
};

handleDeleteStudent = (index) =>{
  const {alumnos} = this.state;
  delete alumnos[index];
  const newStudent= alumnos;
  this.setState({alumnos: newStudent});
}
  render() {
    //Acciones de Dialogo
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Crear"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCreateNewStudent}
      />,
    ];
//
    const {alumnos} = this.state;
    const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Nombre</TableHeaderColumn>
        <TableHeaderColumn>Numero de control</TableHeaderColumn>
        <TableHeaderColumn>Semestre</TableHeaderColumn>
        <TableHeaderColumn>Carrera</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        alumnos.map((item,index)=>(
          <TableRow>
            <TableRowColumn>{item.nombre}</TableRowColumn>
            <TableRowColumn>{item.numControl}</TableRowColumn>
            <TableRowColumn>{item.semestre}</TableRowColumn>
            <TableRowColumn>{item.carrera}</TableRowColumn>
              <TableRowColumn>
              <RaisedButton
                label="Eliminar"
                primary
                style={style}
                onClick={()=>this.handleDeleteStudent(index)}
              />
              </TableRowColumn>
                <TableRowColumn>
                    <RaisedButton
                    label="Editar"
                    secondary={true}
                    style={style}
                    />
                </TableRowColumn>
          </TableRow>
        ))
      }

    </TableBody>
  </Table>
);

const style = {
  margin: 12,
};
    return (
      <div>
        <Helmet
          title="Alumnos"
          meta={[]}
        />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <RaisedButton
        label="Crear"
        style={style}
        onClick={this.handleOpen}
        />
        </div>
        {TableExampleSimple()}
        <Dialog
         title="Nuevo alumno"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
       <TextField
            hintText="Nombre"
            fullWidth={true}
            onChange={(event,newString) =>{
                this.setState({nombre: newString});
            }}
          />
        <TextField
            hintText="Numero de control"
            fullWidth={true}
            onChange={(event,newString) =>{
                this.setState({numControl: newString});
            }}
          />
        <TextField
               hintText="Semestre"
               fullWidth={true}
               onChange={(event,newString) =>{
                   this.setState({semestre: newString});
               }}
          />
        <TextField
                  hintText="Carrera"
                  fullWidth={true}
                  onChange={(event,newString) =>{
                      this.setState({carrera: newString});
                  }}
          />
       </Dialog>
      </div>
    );
  }
}

Alumnos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Alumnos: makeSelectAlumnos(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Alumnos);
