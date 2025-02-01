import { r as reactExports, g as getDefaultExportFromCjs, c as composeStories } from './index-BlCXXu8r.js';
import { fn as fn2 } from './index-CmaCktvo.js';

var jsxRuntime$2 = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}var Fragment = reactJsxRuntime_production_min.Fragment=l;var jsx = reactJsxRuntime_production_min.jsx=q;var jsxs = reactJsxRuntime_production_min.jsxs=q;

var jsxRuntime = jsxRuntime$2.exports;

"use strict";
if (true) {
  jsxRuntime$2.exports = reactJsxRuntime_production_min;
} else {
  module.exports = require("./cjs/react-jsx-runtime.development.js");
}

var jsxRuntimeExports = jsxRuntime$2.exports;
const jsxRuntime$1 = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${size}`, mode].join(" "),
      style: { backgroundColor },
      ...props,
      children: label
    }
  );
};

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn2() }
};
const Primary = {
  args: {
    primary: true,
    label: "Button"
  }
};
const Secondary = {
  args: {
    label: "Button"
  }
};
const Large = {
  args: {
    size: "large",
    label: "Button"
  }
};
const Small = {
  args: {
    size: "small",
    label: "Button"
  }
};

const stories = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Large,
  Primary,
  Secondary,
  Small,
  default: meta
}, Symbol.toStringTag, { value: 'Module' }));

const button_stories_portable = composeStories(stories);

export { button_stories_portable as default };
//# sourceMappingURL=button.stories.portable-DSiENkHl.js.map
