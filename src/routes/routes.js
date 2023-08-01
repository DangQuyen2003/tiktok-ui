import config from '~/config';

// layouts
import { HeaderOnly } from '~/layouts';

// pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.explore,
        component: Explore,
        
    },
    {
        path: config.routes.live,
        component: Live,
        
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
