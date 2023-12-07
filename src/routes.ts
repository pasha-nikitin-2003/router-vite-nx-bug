import {
    createHashRouter,
    createPanel,
    createRoot,
    createView,
    RoutesConfig,
  } from '@vkontakte/vk-mini-apps-router'
  
  export enum AppRoots {
    Main = 'main_root',
  }
  
  export enum AppViews {
    Main = 'main_view',
    Admin = 'admin_view',
  }
  
  export enum MainViewPanels {
    Splash = 'main',
    Home = 'home',
  }
  
  export const routes = RoutesConfig.create([
    createRoot(AppRoots.Main, [
      createView(AppViews.Main, [
        createPanel(MainViewPanels.Splash, '/'),
        createPanel(MainViewPanels.Home, '/home'),
      ]),
    ]),
  ])
  
  export const router = createHashRouter(routes.getRoutes())
  