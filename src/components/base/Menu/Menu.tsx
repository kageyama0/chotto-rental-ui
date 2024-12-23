import { Menu as MantineMenu } from '@mantine/core';
import { memo } from 'react';
import type {
  MenuItemProps as MantineMenuItemProps,
  MenuProps as MantineMenuProps,
} from '@mantine/core';
import type { ComponentPropsWithoutRef } from 'react';

export type MenuProps = MantineMenuProps;
export type MenuItemProps = MantineMenuItemProps &
  ComponentPropsWithoutRef<'button'>;

export const Menu = memo((props: MenuProps) => {
  return <MantineMenu {...props} />;
});

export const MenuDivider = MantineMenu.Divider;
export const MenuDropdown = MantineMenu.Dropdown;
export const MenuItem = MantineMenu.Item;
export const MenuLabel = MantineMenu.Label;
export const MenuTarget = MantineMenu.Target;
