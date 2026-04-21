import { RestaurantInfo } from '@types/index';

export const restaurantInfo: RestaurantInfo = {
  name: 'Sakura Fusion',
  phone: '(123) 456-7890',
  email: 'hello@sakurafusion.com',
  address: '123 Fusion Street, Tokyo District, Cityville 10001',
  openingHours: {
    monday: { open: '11:00', close: '22:00' },
    tuesday: { open: '11:00', close: '22:00' },
    wednesday: { open: '11:00', close: '22:00' },
    thursday: { open: '11:00', close: '22:00' },
    friday: { open: '11:00', close: '23:00' },
    saturday: { open: '11:00', close: '23:00' },
    sunday: { open: '12:00', close: '21:00' },
  },
  deliveryZones: [
    {
      zone: 'Downtown',
      estimatedTime: '30-45 minutes',
      minimumOrder: 25.00,
    },
    {
      zone: 'Midtown',
      estimatedTime: '45-60 minutes',
      minimumOrder: 35.00,
    },
    {
      zone: 'Uptown',
      estimatedTime: '60-75 minutes',
      minimumOrder: 40.00,
    },
  ],
  socialMedia: {
    instagram: 'https://instagram.com/sakurafusion',
    facebook: 'https://facebook.com/sakurafusion',
    twitter: 'https://twitter.com/sakurafusion',
  },
};

export const getOpeningHoursForDay = (day: keyof RestaurantInfo['openingHours']) => {
  return restaurantInfo.openingHours[day];
};

export const isRestaurantOpen = (): boolean => {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof RestaurantInfo['openingHours'];
  const hours = restaurantInfo.openingHours[day];
  
  if (!hours) return false;
  
  const [openHour, openMinute] = hours.open.split(':').map(Number);
  const [closeHour, closeMinute] = hours.close.split(':').map(Number);
  
  const openTime = new Date();
  openTime.setHours(openHour, openMinute, 0, 0);
  
  const closeTime = new Date();
  closeTime.setHours(closeHour, closeMinute, 0, 0);
  
  // Handle overnight closing
  if (closeTime < openTime) {
    closeTime.setDate(closeTime.getDate() + 1);
  }
  
  return now >= openTime && now <= closeTime;
};

export const getNextOpeningTime = (): string => {
  const now = new Date();
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDayIndex = now.getDay();
  
  // Check next 7 days
  for (let i = 1; i <= 7; i++) {
    const dayIndex = (currentDayIndex + i) % 7;
    const day = days[dayIndex] as keyof RestaurantInfo['openingHours'];
    const hours = restaurantInfo.openingHours[day];
    
    if (hours && hours.open !== 'closed') {
      return `Opens ${days[dayIndex].charAt(0).toUpperCase() + days[dayIndex].slice(1)} at ${hours.open}`;
    }
  }
  
  return 'Closed temporarily';
};
