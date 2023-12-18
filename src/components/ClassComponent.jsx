import React from "react";

class ClassComponent extends React.Component {
    render() {
        return <h1>{this.props.title ? this.props.title : "altro titolo a caso "} </h1>;
    }
}

export default ClassComponent;
