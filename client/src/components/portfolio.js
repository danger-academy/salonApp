import React from 'react';
// import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import "./portfolio.css";

const IMAGES =
    [{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        // isSelected: true,
        // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
        // caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://cdn.pixabay.com/photo/2019/02/17/20/03/fair-4003075_960_720.jpg",
        thumbnail: "https://cdn.pixabay.com/photo/2019/02/17/20/03/fair-4003075_960_720.jpg",
        thumbnailWidth: 212,
        thumbnailHeight: 300
    },
    {
        src: "https://cdn.pixabay.com/photo/2019/04/04/06/07/cherry-blossoms-4102077_1280.jpg",
        thumbnail: "https://cdn.pixabay.com/photo/2019/04/04/06/07/cherry-blossoms-4102077_1280.jpg",
        thumbnailWidth: 500,
        thumbnailHeight: 300

    }]

function Portfolio() {
    return (
        <div className="images">
            <Gallery images={IMAGES} />
        </div>
    );

}

export default Portfolio; 