import { ControllerSymbol } from "@deepkit/rpc";

export const IExtensionAppController =
  ControllerSymbol<IExtensionAppController>("Extension.App");
export interface IExtensionAppController {
  get_version(): Promise<string>;
}

export const IExtensionHostController =
  ControllerSymbol<IExtensionHostController>("Extension.Host");
export interface IExtensionHostController {}
