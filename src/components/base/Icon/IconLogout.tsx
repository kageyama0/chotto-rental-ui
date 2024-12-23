import { useIcon } from '@/components/base/Icon/hooks/useIcon';
import type { IconProps } from '@/components/base/Icon/types/Icon.types';
import { forwardRef, memo } from 'react';

export const IconLogout = memo(
  forwardRef<SVGSVGElement, IconProps>((props: IconProps, ref) => {
    const params = useIcon(props);

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-logout"
      >
        <title>Logout</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
        <path d="M9 12h12l-3 -3" />
        <path d="M18 15l3 -3" />
      </svg>
    );
  }),
);
