import React from 'react';
import axios from 'axios';

const API_KEY = "164352566276885";
const WHAT_TIME = Date.now()/1000;
const UPLOAD_PRESET = "fnccpzwc";

class Drop extends React.Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        event.preventDefault();
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
        fd.append("api_key", API_KEY);
        fd.append("time_stamp", WHAT_TIME);
        fd.append("upload_preset", UPLOAD_PRESET);
        axios.post('https://api.cloudinary.com/v1_1/dfosqdpwl/image/upload', fd, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress ' + ProgressEvent.loaded / ProgressEvent.total)
            }
        })
        .then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler.bind(this)}>Upload</button>
            </div>
        )
    }
}

export default Drop;