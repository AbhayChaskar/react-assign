import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class ListDetails extends Component {
    
    renderRows(){
       
        return  this.props.employees.map(function(val, index) {
                  return (
                    <tr key={index}>
                        
                      <th scope="row">
                        {val.id}
                      </th>
                      <td>
                        {val.ename}
                      </td>
                      <td>
                        {val.salary}
                      </td>
                      <td>
                        {val.Domain}
                      </td>
                      <td>
                        {val.mobile}
                      </td>
                      <td>
                        {val.experience}
                      </td>
                      
                    </tr>
                  );
                });
    }

    render(props) {
        return (
            <div className="container-fluid bg-dark text-white">
                <h2 style={{backgroundColor:'royalblue'}}>Home Component</h2>
        
         <table className="table text-white">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">EmpName</th>
      <th scope="col">Salary</th>
      <th scope="col">Technology</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Experience</th>
    </tr>
  
             </thead>
             <tbody>
                {this.renderRows()}
             </tbody>
         </table>
         </div>
        )
    }
}

export default ListDetails
