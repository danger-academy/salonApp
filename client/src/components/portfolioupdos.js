import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfolioupdos.css";

   

class PortfolioUpDos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30707146_10216024515464537_4738488575040007026_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=62d75c6efb724804cd2b506ddc922ba0&oe=5D499006",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30707146_10216024515464537_4738488575040007026_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=62d75c6efb724804cd2b506ddc922ba0&oe=5D499006",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/36754154_10216617418686747_9072192460800655360_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=72cfaa38ce4c734bf1d02871a40da4af&oe=5D345490",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/36754154_10216617418686747_9072192460800655360_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=72cfaa38ce4c734bf1d02871a40da4af&oe=5D345490",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
        
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/43477929_10217370116383719_8709626654705582080_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=0045bfec2a94b07b736d0f4aacb1ecbc&oe=5D42216A",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/43477929_10217370116383719_8709626654705582080_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=0045bfec2a94b07b736d0f4aacb1ecbc&oe=5D42216A",
                thumbnailWidth: 400,
                thumbnailHeight: 400
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

export default PortfolioUpDos;  