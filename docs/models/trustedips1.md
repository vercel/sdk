# TrustedIps1

## Example Usage

```typescript
import { TrustedIps1 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: TrustedIps1 = {
  deploymentType: "all",
  addresses: [
    {
      value: "<value>",
    },
  ],
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                                                     | [models.TrustedIpsDeploymentType](../models/trustedipsdeploymenttype.md)                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `addresses`                                                                                                          | [models.UpdateProjectDataCacheTrustedIpsAddresses](../models/updateprojectdatacachetrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `protectionMode`                                                                                                     | [models.UpdateProjectDataCacheTrustedIpsProtectionMode](../models/updateprojectdatacachetrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |