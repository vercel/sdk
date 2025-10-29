# CreateIntegrationStoreDirectResponseBody

## Example Usage

```typescript
import { CreateIntegrationStoreDirectResponseBody } from "@vercel/sdk/models/createintegrationstoredirectop.js";

let value: CreateIntegrationStoreDirectResponseBody = {
  store: {
    projectsMetadata: [],
    usageQuotaExceeded: true,
    status: "uninstalled",
    externalResourceId: "<id>",
    product: {
      value: {
        atBRANDAt8739: {},
      },
    },
    secrets: [],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `store`                                                                                    | [models.CreateIntegrationStoreDirectStore](../models/createintegrationstoredirectstore.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |