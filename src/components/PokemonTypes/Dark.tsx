import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Props } from './types';

const DarkType: React.FC<Props> = ({ color, size }) => {
  const scale = size / 512;
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M229.379 452.85C239.106 454.339 249.068 455.111 259.212 455.111C367.214 455.111 454.767 367.558 454.767 259.556C454.767 151.553 367.214 64 259.212 64C251.966 64 244.811 64.3941 237.77 65.1621C291.345 105.751 326.767 176.062 326.767 256C326.767 340.04 287.616 413.44 229.379 452.85ZM255.656 512C397.041 512 511.656 397.385 511.656 256C511.656 114.615 397.041 0 255.656 0C114.271 0 -0.34375 114.615 -0.34375 256C-0.34375 397.385 114.271 512 255.656 512Z"
        fill={color}
        scale={scale}
      />
    </Svg>
  );
};

export default DarkType;
