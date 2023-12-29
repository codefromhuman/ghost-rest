export interface IItem {
  label: string;
  variant: 'request' | 'folder';
  type?: 'get' | 'post' | 'patch' | 'put' | 'delete' | 'options';
  items?: IItem[];
}

const MOCK_CRUD: IItem[] = [
  {
    label: 'findAll',
    variant: 'request',
    type: 'get',
  },
  {
    label: 'findOne',
    variant: 'request',
    type: 'get',
  },
  {
    label: 'create',
    variant: 'request',
    type: 'post',
  },
  {
    label: 'update',
    variant: 'request',
    type: 'patch',
  },
  {
    label: 'destroy',
    variant: 'request',
    type: 'delete',
  },
];

export const MOCK_REQUESTS: IItem[] = [
  {
    label: 'NO_NAME',
    variant: 'request',
    type: 'post',
  },
  {
    label: 'authz',
    variant: 'folder',
    items: [
      {
        label: 'auth',
        variant: 'folder',
        items: [
          {
            label: 'sign-in',
            variant: 'request',
            type: 'post',
          },
          {
            label: 'sign-up',
            variant: 'request',
            type: 'post',
          },
          {
            label: 'pre-registration',
            variant: 'request',
            type: 'post',
          },
          {
            label: 'forgot-password',
            variant: 'request',
            type: 'post',
          },
          {
            label: 'verify-code',
            variant: 'request',
            type: 'post',
          },
          {
            label: 'reset-password',
            variant: 'request',
            type: 'post',
          },
        ],
      },
      {
        label: 'user',
        variant: 'folder',
        items: MOCK_CRUD,
      },
      {
        label: 'role',
        variant: 'folder',
        items: MOCK_CRUD,
      },
      {
        label: 'permission',
        variant: 'folder',
        items: MOCK_CRUD,
      },
    ],
  },
  {
    label: 'iam',
    variant: 'folder',
    items: [
      {
        label: 'administrator',
        variant: 'folder',
        items: MOCK_CRUD,
      },
      {
        label: 'customer',
        variant: 'folder',
        items: MOCK_CRUD,
      },
      {
        label: 'distributor',
        variant: 'folder',
        items: MOCK_CRUD,
      },
      {
        label: 'reseller',
        variant: 'folder',
        items: MOCK_CRUD,
      },
    ],
  },
];
