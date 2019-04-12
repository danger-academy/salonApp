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
    saveTheUser: function(userData) {
        return axios.post("/api/user", userData);
    }
};