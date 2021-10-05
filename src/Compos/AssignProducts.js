import React, { Component } from 'react'
import json from '.././AssignProducts.json'

export class AssignProducts extends Component {
    constructor(props){
        super(props);
        this.state={itemData:[],len:''};
    }
    componentDidMount(){
        this.setState({itemData:json.Products})
    }
    addCart=(pid,quantity)=>{
        // alert(pid);
        if(localStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('mycart'));
            if(arr.includes(pid))
            {
                arr.push(quantity);
                localStorage.setItem('mycart',JSON.stringify(arr));
                alert("Product already added");
            }
            else{
                arr.push(pid);
                arr.push(quantity);
                localStorage.setItem('mycart',JSON.stringify(arr));
                this.setState({len:arr.length})
                // alert("Product Added to cart");
            }
        }
        else{
            let arr=[];
            arr.push(pid);
            arr.push(quantity);
            localStorage.setItem('mycart',JSON.stringify(arr));
        }
    }
    render() {
        // console.log(json.Products)
        return (
            <div className="row">
                <nav className="nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Cart {this.state.len}</a>
                <a className="nav-link">Disabled</a>
                </nav>
                <br/>
                {json.Products.map(item=>
                <div className="col-sm-4">
                    <div className="card bg.dark">
                        {console.log(item)}
                        <img src={`${item.images}`} className="card-img-top" alt="Happy"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{item.pname}</h5>
                            <p className="card-text">Id:{item.pid}</p>
                            <p className="card-text">Price: {item.price} & Quantity: {item.quantity}</p>
                            <a href="#" className="btn btn-primary" onClick={()=>this.addCart(item.pid,item.quantity)}>Add in cart</a>
                        </div>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default AssignProducts
