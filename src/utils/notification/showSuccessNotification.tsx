import { IconCheckCircle } from '@/components/base/Icon/IconCheckCircle';
import { showNotification } from '@/utils/notification/showNotification';

interface Props {
  message: string;
}

export const showSuccessNotification = (props: Props) => {
  return showNotification({
    icon: <IconCheckCircle type="success" />,
    color: "blue",
    ...props,
  });
};
