import dayjs from '../plugins/dayJs';
import { colors } from '../styles/color.style';

const getDateTime = (date: string): string => dayjs(date).format('YYYY.MM.DD ddd A HH:mm:ss');

const getDayOfWeekColor = (date: string): string => {
  switch (dayjs(date).day()) {
    case 0:
      return colors.red;
    case 6:
      return colors.blue2;
    default:
      return colors.tertiary;
  }
};

export { getDateTime, getDayOfWeekColor };
