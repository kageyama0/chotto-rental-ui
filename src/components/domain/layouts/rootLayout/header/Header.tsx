'use client';

import { Anchor } from '@/components/base/Anchor/Anchor';
import { Avatar } from '@/components/base/Avatar/Avatar';
import { Group } from '@/components/base/Group/Group';
import { IconLogout } from '@/components/base/Icon/IconLogout';
import {
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuTarget,
} from '@/components/base/Menu/Menu';
import { useHeader } from '@/components/domain/layouts/rootLayout/header/useHeader';
import {
  LOGIN_CLIENT_PATH,
  PROFILE_CLIENT_PATH,
  SIGNUP_CLIENT_PATH,
} from '@/const/clientPath';
import { IconUserCircle } from '@tabler/icons-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const { router, logout } = useHeader();
  const pathname = usePathname();
  const isAuthPage =
    pathname === LOGIN_CLIENT_PATH || pathname === SIGNUP_CLIENT_PATH;

  return (
    <Group justify="space-between" h="100%" px="md">
      <Image src="/logo.png" alt="logo" width={150} height={40} />

      {!isAuthPage && (
        <Group>
          <Group gap="lg">
            <Anchor href="/case/search" underline="hover" c="gray" fw="bold">
              案件を探す
            </Anchor>

            <Anchor href="/case/create" underline="hover" c="gray" fw="bold">
              依頼を出す
            </Anchor>
          </Group>

          <Menu shadow="md" width={200}>
            <MenuTarget>
              <Avatar radius="xl" size="md" style={{ cursor: 'pointer' }} />
            </MenuTarget>

            <MenuDropdown>
              <MenuItem
                leftSection={<IconUserCircle size={20} />}
                c="gray"
                fw="bold"
                onClick={() => router.push(PROFILE_CLIENT_PATH)}
              >
                プロフィール
              </MenuItem>

              <MenuDivider />

              <MenuItem
                leftSection={<IconLogout />}
                onClick={logout}
                c="red"
                fw="bold"
              >
                ログアウト
              </MenuItem>
            </MenuDropdown>
          </Menu>
        </Group>
      )}
    </Group>
  );
};
