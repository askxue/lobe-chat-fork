import UpgradeAlert from '@/app/(main)/settings/features/UpgradeAlert';

import CategoryContent from './features/CategoryContent';

const Category = () => (
    <>
      <CategoryContent />
      <UpgradeAlert />
    </>
  );

Category.displayName = 'SettingCategory';

export default Category;
