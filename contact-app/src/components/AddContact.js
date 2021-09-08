import React from 'react';
import './styles.css'

class AddContact extends React.Component{

    state= {
        name:'',
        email:'',
        mobileNumber:''
    }

    add=(e)=>{
        e.preventDefault()
        if(this.state.name === '' || this.state.email === '' || this.state.mobileNumber===''){
            alert('All Fields are mandatory')
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:'', email:'', mobileNumber:''})
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="ui main">
                <h2 className="addContact">Add Contact</h2>
                <form className="ui form" onSubmit = {this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" name="name" 
                        value={this.state.name} placeholder="Name" 
                        onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="email" name="email"
                        value={this.state.email} placeholder="Email" 
                        onChange={(e)=>{ this.setState({email: e.target.value})}} />
                    </div>
                    <div className="field">
                        <label>Mobile Number</label>
                        <input 
                        type="number" name="mobileNumber"
                        value={this.state.mobileNumber} placeholder="Mobile Number" 
                        onChange={(e)=>{this.setState({mobileNumber: e.target.value})}} />
                    </div>
                    <button className="ui button blue">
                        Add To Contact
                    </button>
                </form>
            </div>
        )
    }
}

export default AddContact