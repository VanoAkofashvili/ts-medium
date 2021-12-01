let inputTypes = ['text', 'password', 'email'] as const;

export type InputTypes = typeof inputTypes[number];
