'use client';

import { Avatar } from '@/components/base/Avatar/Avatar';
// import { Button } from '@/components/base/Button/Button';
import { Group } from '@/components/base/Group/Group';
import {
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from '@/components/base/Menu/Menu';
import { useHeader } from '@/components/domain/layouts/rootLayout/header/useHeader';
import { PROFILE_CLIENT_PATH } from '@/const/clientPath';
import { IconUserCircle } from '@tabler/icons-react';

export const Header = () => {
  const { router, logout } = useHeader();

  return (
    <Group justify="space-between" h="100%" px="md">
      <Group>{/* 既存のロゴなど */}</Group>

      <Menu shadow="md" width={200}>
        <MenuTarget>
          <Avatar radius="xl" size="md" style={{ cursor: 'pointer' }} />
        </MenuTarget>

        <MenuDropdown>
          <MenuItem
            leftSection={<IconUserCircle size={16} />}
            onClick={() => router.push(PROFILE_CLIENT_PATH)}
          >
            プロフィール
          </MenuItem>

          <MenuDivider />

          <MenuItem
            // TODO: ログアウトアイコンを追加する
            // leftSection={<IconLogout size={16} />}
            onClick={logout}
            color="red"
          >
            ログアウト
          </MenuItem>
        </MenuDropdown>
      </Menu>
    </Group>
  );
};
