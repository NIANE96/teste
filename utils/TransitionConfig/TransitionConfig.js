// TransitionConfig.js
import { TransitionSpecs } from '@react-navigation/stack';

const customTransitionConfig = {
  gestureDirection: 'horizontal',
  // transitionSpec: {
  //   open: TransitionSpecs.TransitionIOSSpec,
  //   close: TransitionSpecs.TransitionIOSSpec,
  // },

  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 300, // Durée de l'animation en milliseconds
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({ current, layouts }) => {
    // console.log('current progress:', current.progress);
    // console.log('screen width:', layouts.screen.width);
    return {
      cardStyle: {
        opacity: current.progress,
        transform: [
          // {
          //   translateX: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [layouts.screen.width, 0],
          //   }),
          // },
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            scale: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1],
            }),
          },
        ],
      },
    };
  },
};

export default customTransitionConfig;
