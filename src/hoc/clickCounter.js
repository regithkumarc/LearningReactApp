import React from 'react'
import UpdatedComponent from './updated'
class ClickCounter extends React.Component {

    render() {
        const {name,counter} = this.props;
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.counter}</p>
                <button onClick = {this.props.clickHandler}>Increment</button>
                <p>This.Props</p>
                <p>{name}</p>
                <p>{counter}</p>
            </div>
        )
    }
}
export default UpdatedComponent(ClickCounter)