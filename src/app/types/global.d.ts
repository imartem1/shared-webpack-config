declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGAElement>>;

    export default SVG;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean;
