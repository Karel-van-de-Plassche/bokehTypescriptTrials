// Type definitions for Ion.RangeSlider 11.1.0
// Project: https://github.com/IonDen/ion.rangeSlider/
// Definitions by: Karel van de Plassche <https://github.com/Karel-van-de-Plassche/>
// TypeScript Version: 2.8.3

// API documentation: http://ionden.com/a/plugins/ion.rangeSlider/en.html

// Based on global-modifying module template file

declare global {
    interface JQuery {
        destroy(): void;
        ionRangeSlider(): JQuery;
        ionRangeSlider(options: IonRangeSliderOptions): JQuery;
        reset(): void;
        update(option: IonRangeSliderOptions): void;
    }
}

export interface IonRangeSliderOptions {
    decorate_both?: boolean;
    disable?: boolean;
    drag_interval?: boolean;
    force_edges?: boolean;
    from?: number;
    from_fixed?: boolean;
    from_max?: number;
    from_min?: number;
    from_shadow?: boolean;
    grid?: boolean;
    grid_margin?: boolean;
    grid_num?: number;
    grid_snap?: boolean;
    hide_from_to?: boolean;
    hide_min_max?: boolean;
    keyboard?: boolean;
    keyboard_step?: number;
    max?: number;
    max_interval?: number;
    max_postfix?: string;
    min?: number;
    min_interval?: number;
    onChange?: (obj: IonRangeSliderEvent) => void;
    onFinish?: (obj: IonRangeSliderEvent) => void;
    onStart?: (obj: IonRangeSliderEvent) => void;
    onUpdate?: (obj: IonRangeSliderEvent) => void;
    postfix?: string;
    prefix?: string;
    prettify?: (num: number) => string;
    prettify_enabled?: boolean;
    prettify_separator?: string;
    step?: number;
    to?: number;
    to_fixed?: boolean;
    to_max?: number;
    to_min?: number;
    to_shadowed?: boolean;
    type?: string;
    values?: any[];
    values_separator?: string;
}

interface IonRangeSliderEvent {
    from: number;
    from_precent: number;
    from_value: any;
    input: JQuery;
    max: number;
    min: number;
    slider: JQuery;
    to: number;
    to_precent: number;
    to_value: any;
}
