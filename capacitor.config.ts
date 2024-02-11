import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.shopfolder.app',
  appName: 'shop-folder-home',
  webDir: 'dist/shop-folder-home',
  server: {
    androidScheme: 'https'
  }
};

export default config;
