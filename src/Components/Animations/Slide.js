import { useTransition, animated } from 'react-spring';

const Slide = ({show, wait = 0, trigger = 'both', children}) => {
    const transitions = useTransition(show, {
      from: { y: trigger == 'mount' || trigger == 'both' ? 400 : 0 },
      enter: { y: 0 },
      leave: { y: trigger == 'unmount' || trigger == 'both' ? 400 : 0 },
      delay: wait,
      config: {
          tension: 200,
          friction: 20
      }
    });

    return transitions(
      (styles, item) => item && <animated.div style={styles}>
          {children}
      </animated.div>
    );
  }

  export default Slide;