/* eslint-disable @typescript-eslint/ban-types */

// export function clm<T = {}, S = Styles>(styles?: S, manage: ManageFn<T, S> | Styles): ManageFn<T> {
// export function clm<T = {}, S = Styles>(styles?: S, manage: ManageFn<T, S> | Styles): ManageFn<T> {
//     const resolve = styles ? (cl: string) => styles[cl] || cl : (cl: string) => cl;

//     if (manage !== null && typeof manage === 'object') {
//         return () => manage;
//     } else {
//         return ;
//     }
// }

// function patch(...styles: Styles[]) {
//     return styles.reduce((acc, val) => ({ ...acc, ...val }), {});
// }

// utility types
export type ManageFn<T = {}, S = Styles> = (props: T) => Styles;
type Styles = { [key: string]: string };
