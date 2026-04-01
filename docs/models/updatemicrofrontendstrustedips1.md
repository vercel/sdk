# UpdateMicrofrontendsTrustedIps1

## Example Usage

```typescript
import { UpdateMicrofrontendsTrustedIps1 } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsTrustedIps1 = {
  deploymentType: "production",
  addresses: [],
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                                 | [models.UpdateMicrofrontendsTrustedIpsDeploymentType](../models/updatemicrofrontendstrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `addresses`                                                                                                      | [models.UpdateMicrofrontendsTrustedIpsAddresses](../models/updatemicrofrontendstrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `protectionMode`                                                                                                 | [models.UpdateMicrofrontendsTrustedIpsProtectionMode](../models/updatemicrofrontendstrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |