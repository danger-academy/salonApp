import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliofashion.css";


class PortfolioFashion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/31815471_10216118904984216_1749272392191967232_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=43a67c2024502ceeee706fe222528717&oe=5D3593A2",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/31815471_10216118904984216_1749272392191967232_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=43a67c2024502ceeee706fe222528717&oe=5D3593A2",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/38304006_10216845724874259_972231191082041344_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=7cc8100eb4e6030f49ba48b66c4d1a08&oe=5D3D63E2",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/38304006_10216845724874259_972231191082041344_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=7cc8100eb4e6030f49ba48b66c4d1a08&oe=5D3D63E2",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50563453_10218254807180436_4171982500911906816_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=6e7a6b04cae7e805ee457d6c275e764c&oe=5D343D16",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50563453_10218254807180436_4171982500911906816_n.jpg?_nc_cat=107&_nc_ht=scontent-iad3-1.xx&oh=6e7a6b04cae7e805ee457d6c275e764c&oe=5D343D16",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52664476_10218472785269752_5393159033081298944_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=221545db1da6b389569fa21c4d07de6c&oe=5D2A3057",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52664476_10218472785269752_5393159033081298944_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=221545db1da6b389569fa21c4d07de6c&oe=5D2A3057",
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

export default PortfolioFashion; 