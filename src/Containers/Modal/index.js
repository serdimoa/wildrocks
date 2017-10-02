import React from 'react';
const Modal = require('boron/DropModal');

const Modals = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },

    callback: function(event){
        console.log(event);
    },

    render: function() {
        return (
            <div>
                <button onClick={this.showModal}>Open</button>
                <Modal ref="modal" keyboard={this.callback}>
                  	<form method="POST" action="http://formspree.io/serdimoa@gmail.com" />
  						<input type="email" name="email" placeholder="Your email" />
					  	<textarea name="message" placeholder="Your message"></textarea>
					  	<button type="submit">Send</button>
					</form>
                    <button onClick={this.hideModal}>Close</button>
                </Modal>
            </div>
        );
    }
});

export default Modals;