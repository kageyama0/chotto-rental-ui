import { Notifications as MantineNotifications } from '@mantine/notifications';
import classes from '~/components/base/Toast/Toasts.module.css';

export const Toasts = () => {
  return (
    <MantineNotifications className={classes.toasts} position="top-center" />
  );
};
