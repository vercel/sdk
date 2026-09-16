# UpdateProjectTrustedIps1

## Example Usage

```typescript
import { UpdateProjectTrustedIps1 } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectTrustedIps1 = {
  addresses: [],
  deploymentType: "prod_deployment_urls_and_all_previews",
  protectionMode: "additional",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                        | [models.UpdateProjectTrustedIpsAddresses](../models/updateprojecttrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deploymentType`                                                                                   | [models.UpdateProjectTrustedIpsDeploymentType](../models/updateprojecttrustedipsdeploymenttype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `protectionMode`                                                                                   | [models.UpdateProjectTrustedIpsProtectionMode](../models/updateprojecttrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |