export type buttonVariant = null | 'minimal' | 'outline' | 'fill' | 'three-d';
export type radioVariant = null | 'circle' | 'square' | 'hollow-circle';
export type switchShape = null | 'default' | 'pill' | 'rectangle';
export type switchVariant = null | 'default' | 'icon' | 'text' | 'icon-text';
export type orientation = null | 'vertical' | 'horizontal';
export type size = 'xs'|'sm'|'md'|'lg'|'xl';
export type rounded = 'none'|'sm'|'md'|'lg';
export type shape = 'pill'|'circle';
export type inputTypes = 'text'|'number'|'email'|'password'|'tel'|'url'|'color';
export type inputIcons = null | 'search' | 'mail';
export type inputVariant = null | 'box' | 'underline';
export type componentBasics = {
    className?: string,
    style?: React.CSSProperties,
    id?: string,
    testid?: string
}