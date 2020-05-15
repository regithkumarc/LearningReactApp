import React from 'react'
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                counter : 0
            }
        }

        clickHandler = () => {
            this.setState({counter : 2})
            console.log("Increment : ",this.state.counter)
        }
        render() {
            return <OriginalComponent name = "regith" counter = {this.state.counter} clickHandler = {this.clickHandler}></OriginalComponent>
        }
    }

    return NewComponent;
}

export default UpdatedComponent;