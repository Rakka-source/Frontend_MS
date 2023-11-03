import routerClient from "./router.client";
import routerAnonim from "./router.anonim";
import {Error404} from "../pages"
import {ErrorLayout} from "../layouts"

const routes=[...routerClient,...routerAnonim,{
    path:"*",
    layout:ErrorLayout,
    component: Error404
},]

export default routes;