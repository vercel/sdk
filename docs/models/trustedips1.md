# TrustedIps1

## Example Usage

```typescript
import { TrustedIps1 } from "@vercel/sdk/models/createprojectop.js";

let value: TrustedIps1 = {
  deploymentType: "prod_deployment_urls_and_all_previews",
  addresses: [
    {
      value: "<value>",
    },
  ],
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deploymentType`                                                         | [models.TrustedIpsDeploymentType](../models/trustedipsdeploymenttype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `addresses`                                                              | [models.TrustedIpsAddresses](../models/trustedipsaddresses.md)[]         | :heavy_check_mark:                                                       | N/A                                                                      |
| `protectionMode`                                                         | [models.TrustedIpsProtectionMode](../models/trustedipsprotectionmode.md) | :heavy_check_mark:                                                       | N/A                                                                      |