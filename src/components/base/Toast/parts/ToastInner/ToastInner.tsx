import { Center } from '@/components/base/Center/Center';
import { Group } from '@/components/base/Group/Group';
import { IconClose } from '@/components/base/Icon/IconClose';
import classes from '@/components/base/Toast/parts/ToastInner/ToastInner.module.css';
import type { Props } from '@/components/base/Toast/parts/ToastInner/ToastInner.types';
import { Text } from '@/components/base/Typography/Text';
import { memo } from 'react';

export const ToastInner = memo((props: Props) => {
  return (
    <Group gap="xs" justify="space-between" wrap="nowrap">
      <Group gap="xs" wrap="nowrap">
        <Center>{props.icon}</Center>

        <Text>{props.message}</Text>
      </Group>

      <Center className={classes.closeButton} onClick={props.onClose}>
        <IconClose type="input" />
      </Center>
    </Group>
  );
});
