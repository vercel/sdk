# GetIntegrationResourceClaimRules

## Example Usage

```typescript
import { GetIntegrationResourceClaimRules } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceClaimRules = {
  claims: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `claims`                                                                     | Record<string, *models.GetIntegrationResourceClaims*>                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `when`                                                                       | [models.GetIntegrationResourceWhen](../models/getintegrationresourcewhen.md) | :heavy_minus_sign:                                                           | N/A                                                                          |