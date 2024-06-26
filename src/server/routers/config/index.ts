import { publicProcedure, router } from '@/libs/trpc';
import {
  getServerDefaultAgentConfig,
  getServerGlobalConfig
} from '@/server/globalConfig';

export const configRouter = router({
  getDefaultAgentConfig: publicProcedure.query(async () =>
    getServerDefaultAgentConfig()
  ),

  getGlobalConfig: publicProcedure.query(async () => getServerGlobalConfig())
});
