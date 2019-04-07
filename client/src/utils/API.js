import axios from "axios";

export default {
    // getThemBooks: (q) => {
    //     return axios.get("/api/google", { params: { q: "title" + q } });
    // },
    // getTheSaved: () => {
    //     return axios.get("/api/books");
    // },
    // deleteIt: (id) => {
    //     return axios.delete("/api/books/" + id);
    // },
    saveIt: function(imageData) {
        return axios.post("/api/images", imageData);
    }
};