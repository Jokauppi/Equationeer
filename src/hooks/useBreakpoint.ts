import { useMediaQuery } from 'react-responsive';
import { theme } from '../../tailwind.config.cjs';

type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const breakpoints: any = theme!.screens;

function useBreakpoint<K extends BreakpointKey>(breakpointKey: K) {
  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints![breakpointKey]})`,
  });
  const capitalizedKey = breakpointKey[0].toUpperCase() + breakpointKey.substring(1);
  type Key = `is${Capitalize<K>}`;
  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>;
}

export default useBreakpoint;
