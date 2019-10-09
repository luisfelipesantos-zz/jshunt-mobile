import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            Product
        }
    )
);

export default Routes;