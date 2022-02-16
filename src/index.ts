import tinykeys from 'tinykeys';
import type { KeyBindingMap, KeyBindingOptions } from 'tinykeys';
import { useEffect } from 'react';

export default function useTinykeys(
  keyBindingMap: KeyBindingMap,
  target: Window | HTMLElement = window,
  options: KeyBindingOptions = {}
) {
  useEffect(() => {
    const unsub = tinykeys(target, keyBindingMap, options);

    return () => unsub();
  }, [keyBindingMap]);

  return;
}
