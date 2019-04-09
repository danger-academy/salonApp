import React, { Component }  from "react";
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import "./lookbookbutton.css";

class LBButton extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
        <div id="buttonbackground">
            <Button className="buttons commentButton" justify="center" type="primary" onClick={this.showModal}>Comment</Button>
            <Button className="buttons deleteButton" justify="center" type="danger">Delete</Button>
            <Modal
                title="Comment"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <form>
                    <textarea id="modal">Add a comment...</textarea>
                </form>
            </Modal>
        </div>
    )
}
}

export default LBButton;