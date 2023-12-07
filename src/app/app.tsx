import {
  useActiveVkuiLocation,
  useGetPanelForView,
} from '@vkontakte/vk-mini-apps-router'
import { Root, View, Panel, SplitLayout } from '@vkontakte/vkui'
import { AppViews, MainViewPanels } from '../routes'

export const App = () => {
  const { view: activeView = AppViews.Main } = useActiveVkuiLocation()
  const mainActivePanel = useGetPanelForView(AppViews.Main) || 'main_view'

  return (
    <SplitLayout>
      <Root activeView={activeView}>
        <View nav={AppViews.Main} activePanel={mainActivePanel}>
          <Panel nav={MainViewPanels.Splash}>паша</Panel>
          <Panel nav={MainViewPanels.Home}>маша</Panel>
        </View>
      </Root>
    </SplitLayout>
  )
}
