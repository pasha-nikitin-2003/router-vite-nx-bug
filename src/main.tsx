import * as ReactDOM from 'react-dom/client'
import { RouterProvider } from '@vkontakte/vk-mini-apps-router'
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge'
import { router } from './routes'
import { App } from './app/app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

bridge.send('VKWebAppInit')

root.render(
  <RouterProvider router={router}>
    <ConfigProvider hasCustomPanelHeaderAfter={false}>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </RouterProvider>
)
