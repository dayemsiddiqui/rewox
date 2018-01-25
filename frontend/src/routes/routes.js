import DashboardLayout from '../components/bak/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/bak/GeneralViews/NotFoundPage.vue'
// Dashboard pages
import Overview from 'src/components/bak/Dashboard/Views/Dashboard/Overview.vue'
import Transaction from 'src/components/bak/Dashboard/Views/Dashboard/Transaction.vue'
import Exchange from 'src/components/bak/Dashboard/Views/Dashboard/Exchange.vue'
import Bot from 'src/components/bak/Dashboard/Views/Dashboard/Bot/Bot.vue'
import BotDetail from 'src/components/bak/Dashboard/Views/Dashboard/Bot/BotDetail.vue'
import Stats from 'src/components/bak/Dashboard/Views/Dashboard/Stats.vue'
import OrderForm from 'src/components/bak/BuyAndSell/OrderForm.vue'

// Strategies
import Parent from 'src/components/bak/Dashboard/Views/Dashboard/Strategies/Parent.vue'
import Strategies from 'src/components/bak/Dashboard/Views/Dashboard/Strategies/Strategies.vue'
// import StrategyCreation from 'src/components/bak/Dashboard/Views/Dashboard/StrategyCreation.vue'

// Pages
import User from 'src/components/bak/Dashboard/Views/Pages/UserProfile.vue'
import TimeLine from 'src/components/bak/Dashboard/Views/Pages/TimeLinePage.vue'
import Login from 'src/components/bak/Dashboard/Views/Pages/Login.vue'
import Register from 'src/components/bak/Dashboard/Views/Pages/Register.vue'
import Lock from 'src/components/bak/Dashboard/Views/Pages/Lock.vue'

// Components pages
import Buttons from 'src/components/bak/Dashboard/Views/Components/Buttons.vue'
import GridSystem from 'src/components/bak/Dashboard/Views/Components/GridSystem.vue'
import Panels from 'src/components/bak/Dashboard/Views/Components/Panels.vue'
import SweetAlert from 'src/components/bak/Dashboard/Views/Components/SweetAlert.vue'
import Notifications from 'src/components/bak/Dashboard/Views/Components/Notifications.vue'
import Icons from 'src/components/bak/Dashboard/Views/Components/Icons.vue'
import Typography from 'src/components/bak/Dashboard/Views/Components/Typography.vue'

// Forms pages
import RegularForms from 'src/components/bak/Dashboard/Views/Forms/RegularForms.vue'
import ExtendedForms from 'src/components/bak/Dashboard/Views/Forms/ExtendedForms.vue'
import ValidationForms from 'src/components/bak/Dashboard/Views/Forms/ValidationForms.vue'
import Wizard from 'src/components/bak/Dashboard/Views/Forms/Wizard.vue'

// TableList pages
import RegularTables from 'src/components/bak/Dashboard/Views/Tables/RegularTables.vue'
import ExtendedTables from 'src/components/bak/Dashboard/Views/Tables/ExtendedTables.vue'
import PaginatedTables from 'src/components/bak/Dashboard/Views/Tables/PaginatedTables.vue'
// Maps pages
import GoogleMaps from 'src/components/bak/Dashboard/Views/Maps/GoogleMaps.vue'
import FullScreenMap from 'src/components/bak/Dashboard/Views/Maps/FullScreenMap.vue'
import VectorMaps from 'src/components/bak/Dashboard/Views/Maps/VectorMapsPage.vue'

// Calendar
import Calendar from 'src/components/bak/Dashboard/Views/Calendar/CalendarRoute.vue'
// Charts
import Charts from 'src/components/bak/Dashboard/Views/Charts.vue'

let componentsMenu = {
  path: '/components',
  component: DashboardLayout,
  redirect: '/components/buttons',
  children: [
    {
      path: 'buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: 'grid-system',
      name: 'Grid System',
      component: GridSystem
    },
    {
      path: 'panels',
      name: 'Panels',
      component: Panels
    },
    {
      path: 'sweet-alert',
      name: 'Sweet Alert',
      component: SweetAlert
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    }

  ]
}
let formsMenu = {
  path: '/forms',
  component: DashboardLayout,
  redirect: '/forms/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Forms',
      component: RegularForms
    },
    {
      path: 'extended',
      name: 'Extended Forms',
      component: ExtendedForms
    },
    {
      path: 'validation',
      name: 'Validation Forms',
      component: ValidationForms
    },
    {
      path: 'wizard',
      name: 'Wizard',
      component: Wizard
    }
  ]
}

let tablesMenu = {
  path: '/table-list',
  component: DashboardLayout,
  redirect: '/table-list/regular',
  children: [
    {
      path: 'regular',
      name: 'Regular Tables',
      component: RegularTables
    },
    {
      path: 'extended',
      name: 'Extended Tables',
      component: ExtendedTables
    },
    {
      path: 'paginated',
      name: 'Paginated Tables',
      component: PaginatedTables
    }]
}

let mapsMenu = {
  path: '/maps',
  component: DashboardLayout,
  redirect: '/maps/google',
  children: [
    {
      path: 'google',
      name: 'Google Maps',
      component: GoogleMaps
    },
    {
      path: 'full-screen',
      name: 'Full Screen Map',
      component: FullScreenMap
    },
    {
      path: 'vector-map',
      name: 'Vector Map',
      component: VectorMaps
    }
  ]
}

let pagesMenu = {
  path: '/pages',
  component: DashboardLayout,
  redirect: '/pages/user',
  children: [
    {
      path: 'user',
      name: 'User Page',
      component: User
    },
    {
      path: 'timeline',
      name: 'Timeline Page',
      component: TimeLine
    }
  ]
}

let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

let lockPage = {
  path: '/lock',
  name: 'Lock',
  component: Lock
}

let woxcut = {
  path: '/woxcut',
  component: DashboardLayout,
  children: [
    {
      path: 'overview',
      name: 'Dashboard',
      component: Overview
    },
    {
      path: 'transactions',
      name: 'Transactions',
      component: Transaction
    },
    {
      path: 'exchanges',
      name: 'Exchanges',
      component: Exchange
    },
    {
      path: 'bots', // refactor this
      name: 'Bots',
      component: Bot // rethink the user-friendly routing mechanism for strategy as well
    },
    {
      path: 'bot/view/:id',
      name: 'Bot Detail',
      component: BotDetail
    },
    {
      path: 'strategies',
      name: 'Strategies',
      redirect: 'strategies/strategies',
      component: Parent,
      children: [
        {
          path: 'strategies',
          name: 'Strategy List',
          component: Strategies
        }
      ]
    },
      // {
      //   path: 'strategycreation',
      //   name: 'Strategy Creation',
      //   component: StrategyCreation
      // },
      // {
      //   path: 'strategylist',
      //   name: 'Strategy List',
      //   component: StrategyList
      // },
    {
      path: 'buysell',
      name: 'Buy and Sell',
      component: OrderForm
    },
    {
      path: 'livemarket',
      name: 'Live Market',
      component: Overview
    }
  ]
}

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts
      }
    ]
  },
  woxcut,
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  loginPage,
  registerPage,
  lockPage,
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'stats',
        name: 'Stats',
        component: Stats
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
