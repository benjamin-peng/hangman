import { useTransition, animated } from 'react-spring';

const MountFade = ({show, wait = 0, children}) => {
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0},
      delay: wait,
      config: {
          tension: 100,
          friction: 60
      }
    });

    return transitions(
      (styles, item) => item && <animated.div style={styles}>
          {children}
      </animated.div>
    );
  }

  export default MountFade;