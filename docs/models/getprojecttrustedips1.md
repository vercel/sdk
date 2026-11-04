# GetProjectTrustedIps1

## Example Usage

```typescript
import { GetProjectTrustedIps1 } from "@vercel/sdk/models/getprojectfrompreset.js";

let value: GetProjectTrustedIps1 = {
  addresses: [],
  deploymentType: "all_except_custom_domains",
  protectionMode: "additional",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `addresses`                                                                                  | [models.TrustedIpsAddresses](../models/trustedipsaddresses.md)[]                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `deploymentType`                                                                             | [models.GetProjectTrustedIpsDeploymentType](../models/getprojecttrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `protectionMode`                                                                             | [models.TrustedIpsProtectionMode](../models/trustedipsprotectionmode.md)                     | :heavy_check_mark:                                                                           | N/A                                                                                          |