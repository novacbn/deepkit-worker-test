import { rpc } from "@deepkit/rpc";

import { IExtensionAppController } from "./types.type";

@rpc.controller(IExtensionAppController)
export class ExtensionApp implements IExtensionAppController {
  @rpc.action()
  async get_version() {
    return "1.0.0";
  }
}
