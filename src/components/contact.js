import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact_wrapper">
                <div className="contact_container">
                    <input className="contact_container__email" type="text" name="Nombre" />
                    <input className="contact_container__email" type="text" name="Email" />
                    <input className="contact_container__phone" type="text" name="Phone" />
                    <input className="contact_container__message" type="text" name="Message" />
                    <button>Send it!</button>
                </div>
            </div>
        )
    }
}
export default Contact;