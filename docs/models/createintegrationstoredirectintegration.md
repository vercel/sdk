# CreateIntegrationStoreDirectIntegration

## Example Usage

```typescript
import { CreateIntegrationStoreDirectIntegration } from "@vercel/sdk/models/createintegrationstoredirectop.js";

let value: CreateIntegrationStoreDirectIntegration = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  icon: "<value>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `id`                               | *string*                           | :heavy_check_mark:                 | N/A                                |
| `name`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `slug`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `supportsInstallationBillingPlans` | *boolean*                          | :heavy_minus_sign:                 | N/A                                |
| `icon`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `flags`                            | *string*[]                         | :heavy_minus_sign:                 | N/A                                |