import React, { Component } from 'react';
import axios from 'axios';
import API from "../../utils/API";

const API_KEY = "164352566276885";
const WHAT_TIME = Date.now()/1000;
const UPLOAD_PRESET = "fnccpzwc";

class Drop extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedFiles : [],
            imagePreviewUrl: ''
        }
    }

    fileSelectedHandler = event => {
        event.preventDefault();
        
        let reader = new FileReader();
        let selectedFiles = event.target.files[0];
        console.log(selectedFiles);

        reader.onloadend = () => {
            this.setState({
                selectedFiles: selectedFiles,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(selectedFiles)
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('file', this.state.selectedFiles, this.state.selectedFiles.name);
        fd.append("api_key", API_KEY);
        fd.append("time_stamp", WHAT_TIME);
        fd.append("upload_preset", UPLOAD_PRESET);
        axios.post('https://api.cloudinary.com/v1_1/dfosqdpwl/image/upload', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress ' + Math.round(progressEvent.loaded / progressEvent.total * 100));
            }
        })
        .then(res => {
            console.log(res);
            console.log(res.data.secure_url);
            this.fileSaveHandler(res);
        })
    }

    fileSaveHandler = res => {
        // console.log(res.data.secure_url);
    
        API.saveIt({
            link: res.data.secure_url
    //         // categories: image.volumeInfo.category,
    //         // comments: image.volumeInfo.description
        })
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="preview"/>);
        }
        return (
            <div>
                <input style={{display: "none"}} type="file" onChange={this.fileSelectedHandler.bind(this)} ref={fileInput => this.fileInput = fileInput}/>
                <button onClick={() => this.fileInput.click()}>Pick Photo</button>
                <button onClick={this.fileUploadHandler.bind(this)}>Upload</button>
                {$imagePreview}
            </div>
        )
    }
}

export default Drop;