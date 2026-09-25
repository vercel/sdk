# GetIntegrationResourceCustomClaims

The roles and claim rules Vercel resolves into the resource tokens it mints for this resource

## Example Usage

```typescript
import { GetIntegrationResourceCustomClaims } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceCustomClaims = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `claimRules`                                                                               | [models.GetIntegrationResourceClaimRules](../models/getintegrationresourceclaimrules.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `defaultRole`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `roles`                                                                                    | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |