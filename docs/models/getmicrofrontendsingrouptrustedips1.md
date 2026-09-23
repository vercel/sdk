# GetMicrofrontendsInGroupTrustedIps1

## Example Usage

```typescript
import { GetMicrofrontendsInGroupTrustedIps1 } from "@vercel/sdk/models/getmicrofrontendsingroupto.js";

let value: GetMicrofrontendsInGroupTrustedIps1 = {
  addresses: [
    {
      value: "<value>",
    },
  ],
  deploymentType: "all_except_custom_domains",
  protectionMode: "exclusive",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addresses`                                                                                                                                          | [models.GetMicrofrontendsInGroupTrustedIpsAddresses](../models/getmicrofrontendsingrouptrustedipsaddresses.md)[]                                     | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `deploymentType`                                                                                                                                     | [models.GetMicrofrontendsInGroupTrustedIpsMicrofrontendsDeploymentType](../models/getmicrofrontendsingrouptrustedipsmicrofrontendsdeploymenttype.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `protectionMode`                                                                                                                                     | [models.GetMicrofrontendsInGroupTrustedIpsProtectionMode](../models/getmicrofrontendsingrouptrustedipsprotectionmode.md)                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |