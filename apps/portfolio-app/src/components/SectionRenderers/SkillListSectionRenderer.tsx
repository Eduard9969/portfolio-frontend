import type { FC } from 'react';
import { RatingList, RatingTooltip } from '@org/shared-ui';
import { useTranslate } from '@org/i18n';
import type { SkillListSection } from '../../types/profile';

export const SkillListSectionRenderer: FC<SkillListSection> = ({ items, withTooltip }) => {
  const translate = useTranslate();

  return (
    <>
      {withTooltip && (
        <RatingTooltip
          className="print:hidden"
          legendLabel={translate('rating.legend')}
          labels={[translate('rating.1'), translate('rating.2'), translate('rating.3'), translate('rating.4'), translate('rating.5')]}
        />
      )}
      <RatingList items={items.map((item) => ({ label: item.name, mark: item.mark }))} />
    </>
  );
};
