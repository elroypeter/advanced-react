import React, { Component } from "react";
import ArticleList from "./ArticleList.js";
import PropTypes from "prop-types";

export default class App extends Component {
    state = this.props.store.getState();

    /*
     * Context can be used to share data that is considered global
     * For a tree of react components.
     * We can avoid passing props through intermediate components
     * Which is known as threading the value through each component.
     */

    static childContextTypes = {
        store: PropTypes.object,
    };

    getChildContext() {
        return {
            store: this.props.store,
        };
    }

    render() {
        return (
            <div>
                <ArticleList articles={this.state.articles} />
            </div>
        );
    }
}
