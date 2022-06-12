import { IExtensionAppController } from "../extensions";

import { RpcPortClient } from "../rpc/port";

(async () => {
  const client = new RpcPortClient(self);
  const controller = client.controller(IExtensionAppController);

  await client.connect();
  console.log("get_version", await controller.get_version());
})();
