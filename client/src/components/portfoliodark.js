import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliodark.css";

   

class PortfolioDark extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/56706176_10218805264381522_438950090057449472_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=da74282aa8e1a71629c10e6b845b47e3&oe=5D33D774",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/56706176_10218805264381522_438950090057449472_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=da74282aa8e1a71629c10e6b845b47e3&oe=5D33D774",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/55901725_10218775597439867_1754609395863388160_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=44b8b8824e0cd05b6bac5848acef9932&oe=5D2E2C13",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/55901725_10218775597439867_1754609395863388160_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=44b8b8824e0cd05b6bac5848acef9932&oe=5D2E2C13",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53084545_10218498020420615_4636057930607624192_n.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=280992820e746599a3e8fe96fd930158&oe=5D3A37A4",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53084545_10218498020420615_4636057930607624192_n.jpg?_nc_cat=102&_nc_ht=scontent-iad3-1.xx&oh=280992820e746599a3e8fe96fd930158&oe=5D3A37A4",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51393311_10218367276512099_5598665839441084416_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=8d6329623516f854aa843623b44d0f24&oe=5D38113D",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51393311_10218367276512099_5598665839441084416_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=8d6329623516f854aa843623b44d0f24&oe=5D38113D",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51010732_10218325968679429_4357630181653872640_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=22e2f5d33748590ff7c78f43ba718883&oe=5D405D9D",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51010732_10218325968679429_4357630181653872640_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=22e2f5d33748590ff7c78f43ba718883&oe=5D405D9D",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46222508_10217649661212165_2046706874669072384_n.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=d1789077912d30d9e0b461f7e5ac5f3c&oe=5D36406D",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/46222508_10217649661212165_2046706874669072384_n.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=d1789077912d30d9e0b461f7e5ac5f3c&oe=5D36406D",
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

export default PortfolioDark; 