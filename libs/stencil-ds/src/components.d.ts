/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface StencilDsButton {
    }
}
declare global {
    interface HTMLStencilDsButtonElement extends Components.StencilDsButton, HTMLStencilElement {
    }
    var HTMLStencilDsButtonElement: {
        prototype: HTMLStencilDsButtonElement;
        new (): HTMLStencilDsButtonElement;
    };
    interface HTMLElementTagNameMap {
        "stencil-ds-button": HTMLStencilDsButtonElement;
    }
}
declare namespace LocalJSX {
    interface StencilDsButton {
    }
    interface IntrinsicElements {
        "stencil-ds-button": StencilDsButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "stencil-ds-button": LocalJSX.StencilDsButton & JSXBase.HTMLAttributes<HTMLStencilDsButtonElement>;
        }
    }
}