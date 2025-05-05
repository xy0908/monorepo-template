import type { ComponentResolveResult, Options } from 'unplugin-vue-components'
import type { App } from 'vue'
import { forEach } from 'lodash-es'
import * as components from './components'
import './index.css'

// 导出所有组件和类型标注
export * from './components'
export * from './components/instanceTypes'
export * from './components/type'

// 组件全局导出
export function CreateUI() {
  return (app: App) => {
    forEach(components, (component, name) => {
      app.component(name, component)
    })
  }
}

// 按需引入插件
export const UIResolver: Options = {
  resolvers: [
    (componentName: string): ComponentResolveResult => {
      if (componentName.startsWith('Xy')) {
        return {
          name: componentName,
          from: '@demo/ui',
        }
      }
    },
  ],
}
