import { useState, useEffect } from 'react';

import { ISchema, config, schema } from '../../data/localStorage/config';

export function useConfig<K extends keyof ISchema>(
  key: K
): ISchema[K]['default'] {
  const defaultValue = config.get(
    key,
    schema[key].default
  ) as ISchema[K]['default'];

  const [value, setValue] = useState<ISchema[K]['default']>(defaultValue);

  useEffect(() => {
    const unsubscribe = config.onDidChange(key, (newValue: any) => {
      setValue(newValue as ISchema[K]['default']);
    });

    return unsubscribe;
  }, [key]);

  return value;
}
