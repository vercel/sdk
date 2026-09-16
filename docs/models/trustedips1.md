# TrustedIps1

## Example Usage

```typescript
import { TrustedIps1 } from "@vercel/sdk/models/createprojectresponsebody.js";

let value: TrustedIps1 = {
  addresses: [
    {
      value: "<value>",
    },
  ],
  deploymentType: "prod_deployment_urls_and_all_previews",
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                        | [models.CreateProjectTrustedIpsAddresses](../models/createprojecttrustedipsaddresses.md)[]         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deploymentType`                                                                                   | [models.TrustedIpsDeploymentType](../models/trustedipsdeploymenttype.md)                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `protectionMode`                                                                                   | [models.CreateProjectTrustedIpsProtectionMode](../models/createprojecttrustedipsprotectionmode.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |