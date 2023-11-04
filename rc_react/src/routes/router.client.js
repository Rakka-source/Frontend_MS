import {ClientLayout} from "../layouts"
import {HomeClient} from "../pages/Client"


const routerClient = [
    {
        path:"/user",
        layout:ClientLayout,
        component:HomeClient,
        exact: true,
    }
]

export default routerClient;