import axios from "axios";

export default {
    saveIt: function(imageData) {
        return axios.post("/api/images", imageData);
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
        console.log("What does it all mean? " + q);
        return axios.get("/api/user/find/" + q);
        
    }
};