import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './react-bootstrap-table.min.css';


function linkFormatter(cell, row) {
  return '<a href=' + cell + '>' + cell + '</a>';
}

class APITable extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.options = {
      defaultSortName: 'id',  // default sort column name
      defaultSortOrder: 'asc'  // default sort order
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {

    var items = this.props.items.map((item, index) => {
      item.id = index;      
      return item;
    }).filter(item =>
      item.API.toLowerCase().includes(this.state.value.toLowerCase()) || 
      item.Description.toLowerCase().includes(this.state.value.toLowerCase()) ||
      item.Category.toLowerCase().includes(this.state.value.toLowerCase())
      );;

      if(this.props.items === undefined || this.props.items.length === 0){
        return (
          <div style={{textAlign: "center"}}>
            <img src="loading.gif" alt="Loading data, please wait..." style={{width: "25%"}}/>
          </div>
        )
      }
      else{
        return (
          <div>
            <input type="text" className="form-control" placeholder="Search by API, Description, Category..." value={this.state.value} onChange={this.handleChange} />

            <BootstrapTable options={ this.options } data={ items }>
                <TableHeaderColumn dataField='id' isKey={ true } hidden={ true }>ID</TableHeaderColumn>
                <TableHeaderColumn width='15%' dataField='API' dataSort={ true }>API</TableHeaderColumn>
                <TableHeaderColumn width='20%' dataField='Description' dataSort={ true }>Description</TableHeaderColumn>
                <TableHeaderColumn width='5%' dataField='Auth' dataSort={ true }>Auth</TableHeaderColumn>
                <TableHeaderColumn width='7%' dataField='HTTPS' dataSort={ true }>HTTPS</TableHeaderColumn>
                <TableHeaderColumn width='10%' dataField='Cors' dataSort={ true }>Cors</TableHeaderColumn>
                <TableHeaderColumn width='18%' dataField='Category' dataSort={ true }>Category</TableHeaderColumn>
                <TableHeaderColumn width='25%' dataField='Link' dataFormat={ linkFormatter }>Link</TableHeaderColumn>
            </BootstrapTable>
          </div>)
      }
  }
}

export default APITable;
