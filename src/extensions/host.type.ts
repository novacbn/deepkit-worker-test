import { rpc } from "@deepkit/rpc";

import { IExtensionHostController } from "./types.type";

@rpc.controller(IExtensionHostController)
export class ExtensionHost implements IExtensionHostController {}
