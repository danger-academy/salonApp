import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliolong.css";

 

class PortfolioLong extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50973704_10218307375614614_8508711632241688576_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=c9b48e57267e65633edf44a8a46d1f32&oe=5D3AC652",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50973704_10218307375614614_8508711632241688576_n.jpg?_nc_cat=105&_nc_ht=scontent-iad3-1.xx&oh=c9b48e57267e65633edf44a8a46d1f32&oe=5D3AC652",
                thumbnailWidth: 300,
                thumbnailHeight: 300,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnailWidth: 200,
                thumbnailHeight: 200,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52893734_10218543258031527_5787367224750637056_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=5a93ff93df093b8c326b36723b0de28c&oe=5D2BA32C",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52893734_10218543258031527_5787367224750637056_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=5a93ff93df093b8c326b36723b0de28c&oe=5D2BA32C",
                thumbnailWidth: 200,
                thumbnailHeight: 200,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
        ]
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

export default PortfolioLong; 