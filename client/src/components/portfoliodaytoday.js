import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliodaytoday.css";

   

class PortfolioDayToDay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vdlNnE2wtLRupG5jVvrObGpoTUJWIvdxaK_hr_eU7bb6dGbnpw",
                thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vdlNnE2wtLRupG5jVvrObGpoTUJWIvdxaK_hr_eU7bb6dGbnpw",
                thumbnailWidth: 174,
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
            }]
        }
    }

    render() {
        return (
            <div className="images">
                <Gallery images={this.state.images} />
            </div>
        );

    }

}

export default PortfolioDayToDay;  