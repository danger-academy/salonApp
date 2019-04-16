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
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53306888_10218543277392011_1518639782337445888_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c0fe584da690e91cbb27e4e5e2209cd9&oe=5D2E6515",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52893734_10218543258031527_5787367224750637056_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=5a93ff93df093b8c326b36723b0de28c&oe=5D2BA32C",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52893734_10218543258031527_5787367224750637056_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=5a93ff93df093b8c326b36723b0de28c&oe=5D2BA32C",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/49686415_10218122122503402_6901176128640122880_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=504d7e391f2021f007e0bd6ac7db0d73&oe=5D4A5D2F",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/49686415_10218122122503402_6901176128640122880_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=504d7e391f2021f007e0bd6ac7db0d73&oe=5D4A5D2F",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50748249_10218243226490926_4751200025218908160_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=522c8bd3211aed1896666a76294bf72b&oe=5D33D447",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/50748249_10218243226490926_4751200025218908160_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=522c8bd3211aed1896666a76294bf72b&oe=5D33D447",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48364810_10217876929333726_2208755655739703296_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=ca3cdfd379ff49d871aa569a49eab228&oe=5D3B0959",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/48364810_10217876929333726_2208755655739703296_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=ca3cdfd379ff49d871aa569a49eab228&oe=5D3B0959",
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

export default PortfolioLong; 