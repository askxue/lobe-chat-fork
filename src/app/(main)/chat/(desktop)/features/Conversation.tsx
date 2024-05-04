import { memo } from 'react';

import RawConversation from '@/features/Conversation';

import TelemetryNotification from '../../features/TelemetryNotification';
import ChatInput from './ChatInput';
import HotKeys from './HotKeys';

const Conversation = memo(() => (
  <>
    <RawConversation chatInput={<ChatInput />} />
    <HotKeys />
    <TelemetryNotification />
  </>
));

export default Conversation;
