import React, { useContext, useState, useEffect } from 'react';
import { Upload, Icon, message } from 'antd';
import './Avatar.css';
import axios from 'axios';
import { AuthConsumer } from "../../authContext";
import API from "../../utils/API";

const API_KEY = "164352566276885";
const WHAT_TIME = Date.now()/1000;
const UPLOAD_PRESET = "fnccpzwc";

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isJPG = file.type === 'image/jpeg';
//   if (!isJPG) {
//     message.error('You can only upload JPG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJPG && isLt2M;
// }

function Avatar() {

    const dataUser = useContext(AuthConsumer);
    const user = dataUser.user;
    const [selectedFile, setSelectedFile] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        API.findTheAvatar(user.id)
            .then(result => {
                setImageUrl(result.data.avatar[0].link)});
    }, []);

    const handleChange = info => {
        setSelectedFile(info.file);
        console.log(selectedFile);
        console.log(user);
        fileUploadHandler();
        // if (selectedFile.status === 'uploading') {
        //     setLoading(true);
        //     return;
        // }
        // if (selectedFile.status === 'done') {
        //     getBase64(selectedFile.originFileObj, imageUrl => setImageUrl(imageUrl));
        //     setLoading(false);
        // }
    }

    const fileUploadHandler = () => {
        setLoading(true);
        const fd = new FormData();
        fd.append('file', selectedFile.originFileObj, selectedFile.originFileObj.name);
        fd.append("api_key", API_KEY);
        fd.append("time_stamp", WHAT_TIME);
        fd.append("upload_preset", UPLOAD_PRESET);
        axios.post('https://api.cloudinary.com/v1_1/dfosqdpwl/image/upload', fd)
        .then(res => {
            setLoading(false);
            console.log(res);
            console.log(res.data.secure_url);
            setImageUrl(res.data.secure_url);
            fileSaveHandler(imageUrl);
        })
    }

    const fileSaveHandler = imageUrl => {
        API.saveAvatar({ link: imageUrl, user_id: user.id })
        .then(res => {
            console.log(res);
            // setImageUrl(res.data.avatar[0].link);
        })
    }

// class Avatar extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             selectedFiles : [],
//             loading: false,
//             imagePreviewUrl: ''
//         }
//     }

//   handleChange = (info) => {
//     if (info.file.status === 'uploading') {
//       this.setState({ loading: true });
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, imageUrl => this.setState({
//         imageUrl,
//         loading: false,
//       }));
//     }
//   }

//   render()
    const uploadButton = (
      <div id="profilePic">
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        // beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img id="avatarPhoto"src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    );
}

export default Avatar;