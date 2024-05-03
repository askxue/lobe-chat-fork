import { memo } from 'react';

import AvatarWithUpload from '@/features/AvatarWithUpload';

const Avatar = memo(() => <AvatarWithUpload id={'avatar'} />);

Avatar.displayName = 'Avatar';

export default Avatar;
