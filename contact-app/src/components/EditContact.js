import React from 'react'
import './styles.css'


class EditContact extends React.Component {
    constructor(props) {
        super(props);
        const { id, name, email, mobileNumber } = props.location.state.contact
        this.state = {
            id: id,
            name: name,
            email: email,
            mobileNumber: mobileNumber

        }

    }

    update = (e) => {
        e.preventDefault()
        if(this.state.name === '' && this.state.email==='' && this.state.mobileNumber===''){
            alert('Kindly fill atleast one field to be updated')
            return
        }

        this.props.updateContactHandler(this.state)
        this.setState({name:'', email:'', mobileNumber:''})
        this.props.history.push('/')

    }
    render() {
        return (
            <div className="main">
                <h2 className="addContact">Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input tyep="text" name="name"
                            value={this.state.name} placeholder="Name"
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email"
                            value={this.state.email} placeholder="Email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label>Mobile Number</label>
                        <input type="Number" name="mobile number"
                            value={this.state.mobileNumber} placeholder="Mobile Number"
                            onChange={(e) => this.setState({ mobileNumber: e.target.value })}
                        />
                    </div>

                    <button className="ui button blue">
                        Update Contact
                    </button>
                </form>
            </div>
        )
    }
}


export default EditContact