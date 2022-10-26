export interface RsBoxProps {
    block?: boolean;
}

export interface RsSizableBoxProps extends RsBoxProps {
    width?: number | string;
    height?: number | string;
}

export interface RsInputProps {
    active?: boolean;
    disabled?: boolean;
}

export type RsShape = 'rounded' | 'sharp';
export type RsTheme = 'success' | 'danger' | 'warning' | 'info';
export type RsVariant = 'initial' | 'flat' | 'outline' | 'transparent';

export type RsShapeProps = UnionToPropsWK<'shape', RsShape>;
export type RsThemeProps = UnionToPropsWK<'theme', RsTheme>;
export type RsVariantProps = UnionToPropsWK<'variant', RsVariant>;

// utility types
type UnionToProps<U extends string> = { [key in U]: boolean | undefined };
type UnionToPropsWK<K extends string, U extends string> = { [key in K]: U | undefined } & UnionToProps<U>; // wk => with Key
