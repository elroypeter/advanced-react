import React from "react";
import App from "components/App";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import config from "../config";
import StateApi from "state-api";

export const serverRender = async () => {
    const res = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StateApi(res.data);

    return {
        initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
        initialData: res.data
    };
}