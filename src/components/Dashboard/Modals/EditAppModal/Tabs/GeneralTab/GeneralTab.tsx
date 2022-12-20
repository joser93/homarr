import { Tabs, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { IconClick, IconCursorText, IconLink } from '@tabler/icons';
import { useTranslation } from 'next-i18next';
import { AppType } from '../../../../../../types/app';
import { EditAppModalTab } from '../type';

interface GeneralTabProps {
  form: UseFormReturnType<AppType, (values: AppType) => AppType>;
  openTab: (tab: EditAppModalTab) => void;
}

export const GeneralTab = ({ form, openTab }: GeneralTabProps) => {
  const { t } = useTranslation('layout/modals/add-app');
  return (
    <Tabs.Panel value="general" pt="sm">
      <TextInput
        icon={<IconCursorText size={16} />}
        label={t('general.appname.label')}
        description={t('general.appname.description')}
        placeholder="My example app"
        variant="default"
        mb="md"
        withAsterisk
        required
        {...form.getInputProps('name')}
      />
      <TextInput
        icon={<IconLink size={16} />}
        label={t('general.internalAddress.label')}
        description={t('general.internalAddress.description')}
        placeholder="https://google.com"
        variant="default"
        withAsterisk
        required
        {...form.getInputProps('url')}
        onChange={(e) => {
          form.setFieldValue('behaviour.onClickUrl', e.target.value);
          form.setFieldValue('url', e.target.value);
        }}
      />
      <TextInput
        icon={<IconClick size={16} />}
        label={t('general.externalAddress.label')}
        description={t('general.externalAddress.description')}
        placeholder="https://homarr.mywebsite.com/"
        variant="default"
        mb="md"
        {...form.getInputProps('behaviour.onClickUrl')}
      />
    </Tabs.Panel>
  );
};
