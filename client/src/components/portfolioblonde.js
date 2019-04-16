import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfolioblonde.css";

class PortfolioBlonde extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52979942_10218543247511264_1691109038831435776_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=d138298b453bc2cdecbcf57fba2d1c7c&oe=5D318A0D",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52979942_10218543247511264_1691109038831435776_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=d138298b453bc2cdecbcf57fba2d1c7c&oe=5D318A0D",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52835883_10218498040661121_118665526867132416_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=84303866365c9836089249316c1a1cfe&oe=5D3AD118",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52835883_10218498040661121_118665526867132416_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=84303866365c9836089249316c1a1cfe&oe=5D3AD118",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51373693_10218307084447335_966180402500730880_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=1d82e34d0031d6248b3cbb4689bb595e&oe=5D7713D7",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/51373693_10218307084447335_966180402500730880_n.jpg?_nc_cat=104&_nc_ht=scontent-iad3-1.xx&oh=1d82e34d0031d6248b3cbb4689bb595e&oe=5D7713D7",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/45302272_10217558824821312_616831031114203136_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=fc50c47512c63f0b7f5e77cba8feab63&oe=5D3BB560",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/45302272_10217558824821312_616831031114203136_n.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=fc50c47512c63f0b7f5e77cba8feab63&oe=5D3BB560",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            }, 
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44508737_10217458456712172_393833971168837632_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=7b330d37c0769598f9b0dffb3d7dc691&oe=5D7741E4",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44508737_10217458456712172_393833971168837632_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=7b330d37c0769598f9b0dffb3d7dc691&oe=5D7741E4",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            }, 
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/41131424_10217117291903265_164911625881518080_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=0703d785e261af53c38c57f312866a2a&oe=5D3C4FC1",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/41131424_10217117291903265_164911625881518080_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=0703d785e261af53c38c57f312866a2a&oe=5D3C4FC1",
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

export default PortfolioBlonde; 