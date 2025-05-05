import type * as components from './index'

type ComponentInstanceMap = {
  [key in keyof typeof components]: InstanceType<(typeof components)[key]>
}

export type XyButtonInstance = ComponentInstanceMap['XyButton']
export type XyTagInstance = ComponentInstanceMap['XyTag']
