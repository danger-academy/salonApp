import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliomens.css";


class PortfolioMens extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52970915_10218498075421990_778248181409382400_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=258956cac5676fb87e28ccbf351e22ea&oe=5D4D3F4B",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52970915_10218498075421990_778248181409382400_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=258956cac5676fb87e28ccbf351e22ea&oe=5D4D3F4B",
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

export default PortfolioMens; 