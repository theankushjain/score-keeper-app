import React from "react";
import PropType from "prop-types";

export default class TitleBar extends React.Component {
    renderSubtitle(){
        if (this.props.subtitle) {
            return(
              <div className="title-bar__subtitle">
                    <p>{this.props.subtitle}</p>
              </div>  
            ) 
        }
    }
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                    {this.renderSubtitle()}
                </div>
            </div>
        )
    }
}

TitleBar.propTypes = {
    title: PropType.string.isRequired,
    subtitle: PropType.string
}

TitleBar.defaultProps = {
    title: 'Default Title'
}