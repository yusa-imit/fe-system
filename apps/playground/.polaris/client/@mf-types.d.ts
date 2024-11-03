
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/anyModule';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/anyModule' ? typeof import('REMOTE_ALIAS_IDENTIFIER/anyModule') :any;