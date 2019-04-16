import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import "./portfoliored.css";

class PortfolioRed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images:  [{
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/49682647_10218147121048350_6125161467663613952_n.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=806af6ebdae7d7d32ceaf1b82ee5c51d&oe=5D413FAE",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/49682647_10218147121048350_6125161467663613952_n.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=806af6ebdae7d7d32ceaf1b82ee5c51d&oe=5D413FAE",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52800500_10218473517448056_596363416004722688_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c1225c4103f25c6a266b2ccce456b1ea&oe=5D456ACF",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/52800500_10218473517448056_596363416004722688_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c1225c4103f25c6a266b2ccce456b1ea&oe=5D456ACF",
                thumbnailWidth: 400,
                thumbnailHeight: 400,
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44132125_10217432540384280_8324381883689336832_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=553c7b77e8d3369481aaa2a34cb11f85&oe=5D3F1642",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44132125_10217432540384280_8324381883689336832_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=553c7b77e8d3369481aaa2a34cb11f85&oe=5D3F1642",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37101792_10216675214851615_6387285147099594752_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c32b6f9f7bc1a776cc7643cd74f1428d&oe=5D47FFDD",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37101792_10216675214851615_6387285147099594752_n.jpg?_nc_cat=100&_nc_ht=scontent-iad3-1.xx&oh=c32b6f9f7bc1a776cc7643cd74f1428d&oe=5D47FFDD",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44132125_10217432540384280_8324381883689336832_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=553c7b77e8d3369481aaa2a34cb11f85&oe=5D3F1642",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44132125_10217432540384280_8324381883689336832_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=553c7b77e8d3369481aaa2a34cb11f85&oe=5D3F1642",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            },
            {
                src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30740261_10216030589696389_2064391984269697809_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=4002bed4ecb000451fd6c9a3a4b9618a&oe=5D2CE5AF",
                thumbnail: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30740261_10216030589696389_2064391984269697809_n.jpg?_nc_cat=101&_nc_ht=scontent-iad3-1.xx&oh=4002bed4ecb000451fd6c9a3a4b9618a&oe=5D2CE5AF",
                thumbnailWidth: 400,
                thumbnailHeight: 400
            }
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

export default PortfolioRed; 