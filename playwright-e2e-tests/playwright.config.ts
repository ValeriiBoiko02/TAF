import { PlaywrightTestConfig } from '@playwright/test'

import playwrightBaseConfig from './package/core/config/pwBase.config'

const playwrightConfig: PlaywrightTestConfig = {
  ...playwrightBaseConfig,
}
export default playwrightConfig
