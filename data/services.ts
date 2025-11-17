import { Service } from '../types';
import { MonitorIcon, GameControllerIcon, PhoneIcon } from '../components/icons';

export const services: Service[] = [
  {
    id: 'steam-wallet',
    title: 'Steam Wallet',
    description: 'Add funds to your Steam Wallet to buy games.',
    icon: MonitorIcon,
    bannerUrl: 'https://picsum.photos/seed/steam-banner/1200/400',
    longDescription: 'Buy Steam Wallet Codes to add funds to your Steam account. Purchase PC games, DLCs, and other items from the Steam store. Codes are delivered instantly after payment.',
    prices: [
      { name: '$5 Code', price: '$5.00', imageUrl: 'https://picsum.photos/seed/steam-card-5/200/150' },
      { name: '$10 Code', price: '$10.00', imageUrl: 'https://picsum.photos/seed/steam-card-10/200/150' },
      { name: '$20 Code', price: '$20.00', imageUrl: 'https://picsum.photos/seed/steam-digital/200/150' },
      { name: '$50 Code', price: '$50.00', imageUrl: 'https://picsum.photos/seed/steam-code/200/150' },
      { name: '$100 Code', price: '$100.00', imageUrl: 'https://picsum.photos/seed/steam-cyber/200/150' },
    ],
  },
  {
    id: 'google-play',
    title: 'Google Play Gift Card',
    description: 'Get apps, games, and more on Google Play.',
    icon: PhoneIcon,
    bannerUrl: 'https://picsum.photos/seed/google-banner/1200/400',
    longDescription: 'Redeem Google Play Gift Cards to access millions of the latest Android apps, games, music, movies, TV shows, books, magazines, and more. All from your Android phone, tablet, or the web.',
    prices: [
      { name: '$10 Gift Card', price: '$10.00', imageUrl: 'https://picsum.photos/seed/gplay-card-10/200/150' },
      { name: '$15 Gift Card', price: '$15.00', imageUrl: 'https://picsum.photos/seed/gplay-apps/200/150' },
      { name: '$25 Gift Card', price: '$25.00', imageUrl: 'https://picsum.photos/seed/gplay-code/200/150' },
      { name: '$50 Gift Card', price: '$50.00', imageUrl: 'https://picsum.photos/seed/gplay-movies/200/150' },
      { name: '$100 Gift Card', price: '$100.00', imageUrl: 'https://picsum.photos/seed/gplay-digital/200/150' },
    ],
  },
  {
    id: 'playstation-network',
    title: 'PlayStation Network',
    description: 'PSN cards for games and subscriptions.',
    icon: GameControllerIcon,
    bannerUrl: 'https://picsum.photos/seed/psn-banner/1200/400',
    longDescription: 'Use PlayStation Network Cards to purchase downloadable games, game add-ons, full length movies, TV shows and other content that you can play or view on your PlayStation 5, PlayStation 4, PS Vita or PSP.',
    prices: [
      { name: '$10 PSN Card', price: '$10.00', imageUrl: 'https://picsum.photos/seed/psn-card-10/200/150' },
      { name: '$20 PSN Card', price: '$20.00', imageUrl: 'https://picsum.photos/seed/psn-symbols/200/150' },
      { name: '$25 PSN Card', price: '$25.00', imageUrl: 'https://picsum.photos/seed/psn-plus/200/150' },
      { name: '$50 PSN Card', price: '$50.00', imageUrl: 'https://picsum.photos/seed/psn-digital/200/150' },
      { name: '$100 PSN Card', price: '$100.00', imageUrl: 'https://picsum.photos/seed/psn-code/200/150' },
    ],
  },
];