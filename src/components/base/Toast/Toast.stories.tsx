import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/base/Button/NormalButton/NormalButton';
import { Group } from '~/components/base/Group/Group';
import { Toasts } from '~/components/base/Toast/Toasts';
import storybookClasses from '~/components/base/storybook/styles/base.module.css';
import { showErrorNotification } from '~/utils/notification/showErrorNotification';
import { showSuccessNotification } from '~/utils/notification/showSuccessNotification';

const meta: Meta<typeof Toasts> = {
  title: 'base/Toast',
  component: Toasts,
};

export default meta;

export const Default: StoryObj<typeof Toasts> = {
  render: () => {
    const success = () =>
      showSuccessNotification({
        message: 'Success Message.',
      });

    const error = () =>
      showErrorNotification({
        message: 'Error Message.',
      });

    return (
      <Group className={storybookClasses.wrapper}>
        <Button onClick={success}>Success Notification</Button>

        <Button onClick={error}>Error Notification</Button>
      </Group>
    );
  },
};
