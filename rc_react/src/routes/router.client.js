import {ClientLayout} from "../layouts"
import {LoginClient} from "../pages/Client"


const routerClient = [
    {
        path:"/user",
        layout:ClientLayout,
        component:LoginClient,
        exact: true,
    }
]

export default routerClient;