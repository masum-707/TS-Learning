type NullableString = null | undefined | string;

type NonNullable<T> = T extends null | undefined ? never : T;

type CondUnionType = NonNullable<NullableString>; //string
