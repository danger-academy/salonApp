import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliodaytoday.css"

class PortfolioDayToDay extends Component {

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
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53918388_10218590028720765_7926476936358920192_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=453d90d14a83cfb114fa1d64c3778088&oe=5D2ABE57",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/53918388_10218590028720765_7926476936358920192_n.jpg?_nc_cat=108&_nc_ht=scontent-iad3-1.xx&oh=453d90d14a83cfb114fa1d64c3778088&oe=5D2ABE57",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42320512_10217225811096177_1221780249952387072_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=e67d1489d2730202ea9eb3b1085a6f84&oe=5D33C5B2",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/42320512_10217225811096177_1221780249952387072_n.jpg?_nc_cat=106&_nc_ht=scontent-iad3-1.xx&oh=e67d1489d2730202ea9eb3b1085a6f84&oe=5D33C5B2",
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

export default PortfolioDayToDay;  