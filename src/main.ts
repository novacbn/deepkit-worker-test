import { RpcKernel } from "@deepkit/rpc";
import { IExtensionAppController, ExtensionApp } from "./extensions";

import { RpcPortServer } from "./rpc/port";

import ExtensionWorker from "./workers/extension?worker";

(async () => {
  const worker = new ExtensionWorker();
  const kernel = new RpcKernel();

  kernel.registerController(IExtensionAppController, ExtensionApp);

  const server = new RpcPortServer(worker, kernel);
  await server.start();
})();
