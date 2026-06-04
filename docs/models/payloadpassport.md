# PayloadPassport

## Example Usage

```typescript
import { PayloadPassport } from "@vercel/sdk/models/datacacheread.js";

let value: PayloadPassport = {
  connectorId: "<id>",
  deploymentType: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `connectorId`                                                      | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `deploymentType`                                                   | [models.PayloadDeploymentType](../models/payloaddeploymenttype.md) | :heavy_check_mark:                                                 | N/A                                                                |