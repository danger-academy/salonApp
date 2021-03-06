import axios from "axios";

export default {
    saveIt: function(imageData) {
        return axios.post("/api/images", imageData);
    },
    saveAvatar: function(avatarData) {
        return axios.post("/api/images/avatar", avatarData);
    },
    getImages: function() {
        return axios.get("/api/images");
    },
    saveTheDate: function(apptData) {
        return axios.post("/api/appt", apptData);
    },
    getTheDate: function() {
        return axios.get("/api/appt");
    },
    saveTheUser: function(newUserData) {
        return axios.post("/api/user", newUserData);
    },
    findTheUser: function(q) {
        return axios.get("/api/user/find/" + q);        
    },
    findTheAppt: function(user) {
        return axios.get("/api/user/appt/" + user);
    },
    findTheAvatar: function(user) {
        return axios.get("/api/user/avatar/" + user);
    }
};