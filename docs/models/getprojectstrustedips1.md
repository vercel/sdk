# GetProjectsTrustedIps1

## Example Usage

```typescript
import { GetProjectsTrustedIps1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsoidcproviders.js";

let value: GetProjectsTrustedIps1 = {
  addresses: [],
  deploymentType: "production",
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `addresses`                                                                                    | [models.GetProjectsTrustedIpsAddresses](../models/getprojectstrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deploymentType`                                                                               | [models.GetProjectsTrustedIpsDeploymentType](../models/getprojectstrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `protectionMode`                                                                               | [models.GetProjectsTrustedIpsProtectionMode](../models/getprojectstrustedipsprotectionmode.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |