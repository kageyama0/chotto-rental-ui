import { IconReport } from '@/components/base/Icon/IconReport';
import { showNotification } from '@/utils/notification/showNotification';

interface Props {
  message: string;
}

export const showErrorNotification = (props: Props) => {
  return showNotification({
    icon: <IconReport type="error" />,
    color: "red",
    ...props,
  });
};
