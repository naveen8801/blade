import type { ReactElement } from 'react';
import { Svg, Path } from '../_Svg';
import type { IconProps } from '..';
import useIconProps from '../useIconProps';

const RupeeIcon = ({ size, color }: IconProps): ReactElement => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg height={height} width={width} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 5.67187L19.2023 8.39062H4L4.79765 5.67187H20ZM12.868 24L4.28152 13.5L4.2346 11.5313H8.5044C9.61486 11.5313 10.5611 11.375 11.3431 11.0625C12.1251 10.7422 12.7234 10.2656 13.1378 9.63281C13.5523 8.99219 13.7595 8.1875 13.7595 7.21875C13.7595 5.78906 13.3294 4.66797 12.4692 3.85547C11.609 3.03516 10.2874 2.625 8.5044 2.625H4L4.79765 0H8.5044C10.4125 0 11.9765 0.316406 13.1965 0.949218C14.4242 1.57422 15.3314 2.43359 15.9179 3.52734C16.5122 4.61328 16.8094 5.84375 16.8094 7.21875C16.8094 8.46094 16.5357 9.60547 15.9883 10.6523C15.4487 11.6914 14.5806 12.5273 13.3842 13.1602C12.1955 13.793 10.6237 14.1094 8.66862 14.1094H8.59824L16.5279 23.8125V24H12.868ZM20 0L19.2023 2.71875L7.23754 2.625L8.03519 0H20Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default RupeeIcon;