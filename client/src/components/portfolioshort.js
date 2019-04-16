import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfolioshort.css";


class PortfolioShort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53918388_10218590028720765_7926476936358920192_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=453d90d14a83cfb114fa1d64c3778088&oe=5D2ABE57",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53918388_10218590028720765_7926476936358920192_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=453d90d14a83cfb114fa1d64c3778088&oe=5D2ABE57",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52156655_10218431502957720_1332388710229999616_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=2d1dc215d3fbb85f9fd5e20f45db7700&oe=5D44B191",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52156655_10218431502957720_1332388710229999616_n.jpg?_nc_cat=103&_nc_ht=scontent-iad3-1.xx&oh=2d1dc215d3fbb85f9fd5e20f45db7700&oe=5D44B191",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50578038_10218249445886407_1014253198350745600_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=9457add214d2d8c1b055413a9f49c2d8&oe=5D75D1B3",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50578038_10218249445886407_1014253198350745600_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=9457add214d2d8c1b055413a9f49c2d8&oe=5D75D1B3",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50234362_10218138843961428_177606909258366976_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=6b0d1de8a764564ec287baa501799b99&oe=5D45498F",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50234362_10218138843961428_177606909258366976_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=6b0d1de8a764564ec287baa501799b99&oe=5D45498F",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/43587002_10217370120943833_5909327416735563776_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=d46d4cb8ace1b9d75610e6fc324558bd&oe=5D379A37",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/43587002_10217370120943833_5909327416735563776_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=d46d4cb8ace1b9d75610e6fc324558bd&oe=5D379A37",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/41764965_10217180445402063_4632188732009611264_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=1a499d45282be1447d6f0110f642231a&oe=5D2A3DEC",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/41764965_10217180445402063_4632188732009611264_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=1a499d45282be1447d6f0110f642231a&oe=5D2A3DEC",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
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

export default PortfolioShort; 