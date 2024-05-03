import OpenAI from './features/OpenAI';
import STT from './features/STT';

const Page = () => (
    <>
      <STT />
      <OpenAI />
    </>
  );

Page.displayName = 'TtsSetting';

export default Page;
