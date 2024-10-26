import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

const useOrientation = () => {
  const [orientation, setOrientation] = useState(ScreenOrientation.Orientation.PORTRAIT_UP);

  useEffect(() => {
    const updateOrientation = async () => {
      try {
        const orientationCode = await ScreenOrientation.getOrientationAsync();
        setOrientation(orientationCode);
      } catch (error) {
        console.error("Failed to get orientation:", error);
      }
    };

    updateOrientation();
    
    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      setOrientation(event.orientationInfo.orientation);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const isPortrait = orientation === ScreenOrientation.Orientation.PORTRAIT_UP || orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN;
  const isLandscape = orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT || orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

  return {
    orientation,
    isPortrait,
    isLandscape
  };
};

export default useOrientation;
