import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const WindIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5079 5.13376C11.115 4.90724 10.6189 4.97345 10.2992 5.29506C9.90983 5.68674 9.27667 5.68862 8.88499 5.29925C8.49331 4.90989 8.49144 4.27673 8.8808 3.88505C9.83995 2.9202 11.3283 2.72157 12.5069 3.40113C13.6855 4.0807 14.2593 5.4683 13.9048 6.78178C13.5505 8.09454 12.3576 9.00476 10.998 9.00005C10.9973 9.00005 10.9965 9.00005 10.9958 9.00005L11 8.00005V9.00005H10.998H2C1.44772 9.00005 1 8.55234 1 8.00005C1 7.44777 1.44772 7.00005 2 7.00005H11.0042C11.4577 7.00196 11.8557 6.69847 11.9739 6.26064C12.092 5.82281 11.9008 5.36028 11.5079 5.13376ZM20.2458 8.20121C19.6585 7.86189 18.9165 7.95901 18.4362 8.43806C18.0452 8.82809 17.412 8.82728 17.022 8.43627C16.632 8.04525 16.6328 7.41208 17.0238 7.02205C18.1444 5.90427 19.8757 5.67767 21.2463 6.4694C22.6168 7.26114 23.2854 8.87414 22.877 10.4033C22.4685 11.9325 21.0846 12.9972 19.5018 13.0001L19.5 13.0001H2C1.44772 13.0001 1 12.5523 1 12.0001C1 11.4478 1.44772 11.0001 2 11.0001H19.4989C20.177 10.9985 20.7697 10.5423 20.9447 9.88717C21.1198 9.23181 20.8332 8.54052 20.2458 8.20121ZM13.998 15.0001C15.3576 14.9954 16.5505 15.9056 16.9048 17.2183C17.2593 18.5318 16.6855 19.9194 15.5069 20.599C14.3283 21.2785 12.84 21.0799 11.8808 20.1151C11.4914 19.7234 11.4933 19.0902 11.885 18.7009C12.2767 18.3115 12.9098 18.3134 13.2992 18.705C13.6189 19.0267 14.115 19.0929 14.5079 18.8664C14.9008 18.6398 15.092 18.1773 14.9739 17.7395C14.8557 17.3016 14.4577 16.9981 14.0042 17L14 17.0001H2C1.44772 17.0001 1 16.5523 1 16.0001C1 15.4478 1.44772 15.0001 2 15.0001H13.998Z"
        fill={iconColor}
      />
    </Svg>
  );
};

export default WindIcon;