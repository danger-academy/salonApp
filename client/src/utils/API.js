import axios from "axios";

export default {
    saveIt: function(imageData) {
        return axios.post("/api/images", imageData);
    },
    saveTheDate: function(apptData) {
        return axios.post("/api/appt", apptData);
    }
};