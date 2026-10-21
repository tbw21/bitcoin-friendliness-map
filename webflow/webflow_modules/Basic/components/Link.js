"use client";
import * as React from "react";
import { DevLinkContext } from "../../../DevLinkProvider";
const [majorVersion = 0, minorVersion = 0] = React.version
  .split(".")
  .map((part) => Number.parseInt(part, 10));
const usesCamelCasePopoverAttributes = majorVersion >= 19;
const usesCamelCaseCommandFor =
  majorVersion > 19 || (majorVersion === 19 && minorVersion >= 2);
const POPOVER_TARGET_ATTRIBUTE = usesCamelCasePopoverAttributes
  ? "popoverTarget"
  : "popovertarget";
const POPOVER_TARGET_ACTION_ATTRIBUTE = usesCamelCasePopoverAttributes
  ? "popoverTargetAction"
  : "popovertargetaction";
const COMMAND_FOR_ATTRIBUTE = usesCamelCaseCommandFor
  ? "commandFor"
  : "commandfor";
const isPopoverOptions = (options) =>
  Boolean(options && "popoverTargetAction" in options);
const isModalOptions = (options) =>
  Boolean(options && "modalAction" in options);
const Link = React.forwardRef(function Link(
  {
    options = { href: "#" },
    className = "",
    button = false,
    children,
    block = "",
    ...props
  },
  ref
) {
  const { renderLink: UserLink } = React.useContext(DevLinkContext);
  if (button) className += " w-button";
  if (block === "inline") className += " w-inline-block";
  if (isPopoverOptions(options) || isModalOptions(options)) {
    const {
      href: _href,
      target: _target,
      rel: _rel,
      download: _download,
      hrefLang: _hrefLang,
      ping: _ping,
      referrerPolicy: _referrerPolicy,
      "aria-current": _ariaCurrent,
      ...buttonProps
    } = props;
    const isPopover = isPopoverOptions(options);
    const overlayAttributes = isPopover
      ? {
          ...(options.popoverTarget
            ? { [POPOVER_TARGET_ATTRIBUTE]: options.popoverTarget }
            : {}),
          [POPOVER_TARGET_ACTION_ATTRIBUTE]: options.popoverTargetAction,
        }
      : {
          ...(options.modalTarget
            ? { [COMMAND_FOR_ATTRIBUTE]: options.modalTarget }
            : {}),
          command: options.modalAction === "hide" ? "close" : "show-modal",
        };
    return React.createElement(
      "button",
      {
        ...buttonProps,
        type: "button",
        className: `${className} ${
          isPopover ? "w-popover-trigger" : "w-modal-trigger"
        }`,
        ...overlayAttributes,
        ref,
      },
      children
    );
  }
  const anchorRef = ref;
  if (UserLink) {
    return React.createElement(
      UserLink,
      { className: className, ...options, ...props, ref: anchorRef },
      children
    );
  }
  const { href, target, preload = "none" } = options;
  const shouldRenderResource =
    preload !== "none" && typeof href === "string" && !href.startsWith("#");
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "a",
      {
        href: href,
        target: target,
        className: className,
        ...props,
        ref: anchorRef,
      },
      children
    ),
    shouldRenderResource &&
      React.createElement("link", { rel: preload, href: href })
  );
});
export default Link;
