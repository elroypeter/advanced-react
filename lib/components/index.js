import { createRoot } from "react-dom/client";
import React, { Component } from "react"

class App extends Component {
    state = {
        answer: 450
    }

    asyncFunc = () => {
        return Promise.resolve(34);
    }

    async componentDidMount(){
        this.setState({
            answer: await this.asyncFunc()
        });
    }

    render() {
        return (
            <div>index {this.state.answer}</div>
        )
    }
}


const div = document.getElementById("root");
createRoot(div).render(<App/>);