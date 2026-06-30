# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/usereventpayload146role.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "preview",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connectorId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `deploymentType`                                                   | [models.PayloadDeploymentType](../models/payloaddeploymenttype.md) | :heavy_check_mark:                                                 | N/A                                                                |