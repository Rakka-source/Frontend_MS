import { LandPageLayout } from "../layouts";
import{Error404} from "../pages";
import {Home} from "../pages/LandPage";

const routerAnonim = [
    {
        path:"/",
        layout: LandPageLayout,
        component:Home,
        exact: true,
    },

];

export default routerAnonim;