import { ModelProviderCard } from '@/types/llm';

// ref https://platform.moonshot.cn/docs/intro#模型列表
const Moonshot: ModelProviderCard = {
  chatModels: [
    {
      displayName: 'Moonshot V1 8K',
      enabled: true,
      id: 'moonshot-v1-8k',
      tokens: 8192
    },
    {
      displayName: 'Moonshot V1 32K',
      enabled: true,
      id: 'moonshot-v1-32k',
      tokens: 32_768
    },
    {
      displayName: 'Moonshot V1 128K',
      enabled: true,
      id: 'moonshot-v1-128k',
      tokens: 128_000
    }
  ],
  id: 'moonshot'
};

export default Moonshot;
