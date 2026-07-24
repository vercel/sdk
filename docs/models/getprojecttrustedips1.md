# GetProjectTrustedIps1

## Example Usage

```typescript
import { GetProjectTrustedIps1 } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectTrustedIps1 = {
  deploymentType: "all",
  addresses: [],
  protectionMode: "additional",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `deploymentType`                                                                             | [models.GetProjectTrustedIpsDeploymentType](../models/getprojecttrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `addresses`                                                                                  | [models.TrustedIpsAddresses](../models/trustedipsaddresses.md)[]                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `protectionMode`                                                                             | [models.TrustedIpsProtectionMode](../models/trustedipsprotectionmode.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |