import { useIcon } from '@/components/base/Icon/hooks/useIcon';
import type { IconProps } from '@/components/base/Icon/types/Icon.types';
import { forwardRef, memo } from 'react';

export const IconCheckCircle = memo(
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
      >
        <title>CheckCircle</title>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
    );
  }),
);
