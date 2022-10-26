export function clx(...args: ClxArg[]): string {
    const classNames = new Set<string>();
    const resolve = (arg: ClxBaseArg) => !!arg && typeof arg === 'string' && classNames.add(arg.trim());

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (isRecord(arg)) {
            if (!Array.isArray(arg)) {
                const keys = Object.keys(arg);

                for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    const val = (arg as ClxObjArg)[key];
                    resolve(typeof val === 'string' ? val : key);
                }
            } else for (let j = 0; j < arg.length; j++) resolve(arg[j]);
        } else resolve(arg);
    }

    return Array.from(classNames).join(' ');
}

export default clx;

function isRecord(val: unknown): val is Record<string, unknown> {
    return val !== null && typeof val === 'object';
}

// utility types
export type ClxArg = ClxBaseArg | ClxObjArg;
type ClxObjArg = { [key: string]: ClxBaseArg };
type ClxBaseArg = string | boolean | null | undefined;
