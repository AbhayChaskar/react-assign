import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName =RegExp(/^[A-Za-z]/);
const regForAge =RegExp(/^[0-9]/);
const regForMobile=RegExp(/^[1-9]\d{9}$|^[1-9]\d{9}$/);
const regForAadhar=RegExp(/^(\d{3}\s?){4}(\d{2})?$/)
export class Form extends Component {
    constructor(props){
        super(props);
        this.state={
               errors:{
                fname:'',
                lname:'',
                father_name:'',
                mother_name:'',
                age:'',
                email:'',
                password:'',
                confirm_password:'',
                mobile:'',
                quali:'',
                salary:'',
                college:'',
                university:'',
                company:'',
                city:'',
                aadhar:''
                   
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'fname':
                    errors.fname=regForName.test(value)?'':'Enter Valid Name';
                    break;
                    case 'lname':
                        errors.lname=regForName.test(value)?'':'Enter Valid Name';
                        break;
                    case 'father_name':
                        errors.lname=regForName.test(value)?'':'Enter Valid Name';
                        break;
                    case 'mother_name':
                        errors.lname=regForName.test(value)?'':'Enter Valid Name';
                        break;
                    case 'age':
                        errors.age=regForAge.test(value)?'':'Enter Valid Age';
                        break;
                    case 'email':
                        errors.email=regForEmail.test(value)?'':'Email is not valid';
                        break;
                    case 'password':
                            errors.password=value.length<8?'Password must me 8 chanrater long':'';
                            break;
              
                    case 'mobile':
                        errors.mobile=regForMobile.test(value)?'':'Mobile Number is not valid';
                        break;
                    case 'quali':
                        errors.quali=regForName.test(value)?'':'Qualification is not valid';
                        break;
                    case 'salary':
                        errors.salary=regForAge.test(value)?'':'Salary is not valid';
                        break;
                    case 'college':
                        errors.college=regForName.test(value)?'':'College is not valid';
                        break;
                    case 'university':
                        errors.university=regForName.test(value)?'':'University is not valid';
                        break;
                    case 'company':
                        errors.company=regForName.test(value)?'':'Company is not valid';
                        break;
                     case 'city':
                        errors.city=regForName.test(value)?'':'city is not valid';
                        break;
                    case 'aadhar':
                        errors.aadhar=regForAadhar.test(value)?'':'Aadhar Number is not valid';
                        break;
                    default:
                        break;
                   
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert("Application Submitted Successfully !!!");
         
           }
           else {
               alert("Please Enter Valid details");
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
            render() {
        const {errors}=this.state;
        return (
            <div className="container-fluid row text-white">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h2 className="text-center">Application Form</h2>
                <form onSubmit={this.formSubmit}>
 
               
                First Name :<input type="text" name="fname" id="first_name" onChange={this.handler} value={this.fname} className="form-control"/>{errors.fname.length>0 && 
                <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                Last Name :<input type="text" name="lname" onChange={this.handler} value={this.lname} className="form-control"/>{errors.lname.length>0 && 
                <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                Father Name :<input type="text" name="father_name" onChange={this.handler} value={this.father_name} className="form-control"/>{errors.father_name.length>0 && 
                <span style={{color:'red'}}>{errors.father_name}</span>}<br/>
                Mother Name :<input type="text" name="mother_name" onChange={this.handler} value={this.mother_name} className="form-control"/>{errors.mother_name.length>0 && 
                <span style={{color:'red'}}>{errors.mother_name}</span>}<br/>
                Age : <input type="text" name="age" id="age" onChange={this.handler} className="form-control" />{errors.age.length>0 && 
                <span style={{color:'red'}}>{errors.age}</span>}<br/>
                City :<input type="text" name="city" onChange={this.handler} value={this.city} className="form-control"/>{errors.city.length>0 && 
                <span style={{color:'red'}}>{errors.city}</span>}<br/>
                Email : <input type="text" name="email" onChange={this.handler} className="form-control"/> {errors.email.length>0 && 
                <span style={{color:'red'}}>{errors.email}</span>}<br/>
                Mobile No. : <input type="text" name="mobile" value={this.mobile} onChange={this.handler} className="form-control"/>
                {errors.mobile.length>0 && 
                <span style={{color:'red'}}>{errors.mobile}</span>}<br/>
                Qualification : <input type="text" name="quali" value={this.quali} onChange={this.handler} className="form-control"/>
                {errors.quali.length>0 && 
                <span style={{color:'red'}}>{errors.quali}</span>}<br/>
                College Name : <input type="text" name="college" value={this.college} onChange={this.handler} className="form-control"/>
                {errors.college.length>0 && 
                <span style={{color:'red'}}>{errors.college}</span>}<br/>
                University Name : <input type="text" name="university" value={this.university} onChange={this.handler} className="form-control"/>
                {errors.university.length>0 && 
                <span style={{color:'red'}}>{errors.university}</span>}<br/>
                Company Name : <input type="text" name="company" value={this.company} onChange={this.handler} className="form-control"/>
                {errors.company.length>0 && 
                <span style={{color:'red'}}>{errors.company}</span>}<br/>
                
                Salary(Annual) : <input type="text" name="salary" value={this.salary} onChange={this.handler} className="form-control"/>
                {errors.salary.length>0 && 
                <span style={{color:'red'}}>{errors.salary}</span>}<br/>
                Aadhar No. : <input type="text" name="aadhar" value={this.aadhar} onChange={this.handler} className="form-control"/>
                {errors.aadhar.length>0 && 
                <span style={{color:'red'}}>{errors.aadhar}</span>}<br/>
                Password : <input type="password" name="password" value={this.password} onChange={this.handler} className="form-control"/>
                {errors.password.length>0 && 
                <span style={{color:'red'}}>{errors.password}</span>}<br/>
                
                
                <input type="submit" value="submit"  className="btn btn-primary text-center" style={{textAlign:"center", marginLeft:"250px"}} />
                </form>
                </div>
                <div className="col-md-3"></div>
            
            </div>
        )
    }
}

export default Form;