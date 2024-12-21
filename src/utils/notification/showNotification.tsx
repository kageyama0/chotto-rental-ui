import { ToastInner } from '@/components/base/Toast/parts/ToastInner/ToastInner';
import { AUTO_CLOSE_TIME } from '@/const/notification';
import { notifications } from '@mantine/notifications';
import { v4 as uuid } from 'uuid';

interface Props {
  message: string;
  icon: React.ReactNode;
}

export const showNotification = (props: Props) => {
  const id = uuid();
  const onClose = () => notifications.hide(id);

  return notifications.show({
    id,
    autoClose: AUTO_CLOSE_TIME,
    withCloseButton: false,
    position: 'top-center',
    message: (
      <ToastInner message={props.message} icon={props.icon} onClose={onClose} />
    ),
  });
};
