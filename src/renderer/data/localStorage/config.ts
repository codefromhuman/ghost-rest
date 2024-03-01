import Store from 'electron-store';

export interface ISchema {
  useMacOSWindowActionButtons: {
    type: 'boolean';
    default: boolean;
  };
  windowBounds: {
    type: 'number';
    default: {
      width: number;
      minWidth: number;
      minHeight: number;
      height: number;
    };
  };
}

const schema: ISchema = {
  useMacOSWindowActionButtons: {
    type: 'boolean',
    default: false,
  },
  windowBounds: {
    type: 'number',
    default: {
      width: 1100,
      minWidth: 1000,
      minHeight: 600,
      height: 700,
    },
  },
};

const config = new Store<ISchema>({
  schema,
  watch: true,
});

export { schema, config };
