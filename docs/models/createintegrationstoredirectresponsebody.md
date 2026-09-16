# CreateIntegrationStoreDirectResponseBody

## Example Usage

```typescript
import { CreateIntegrationStoreDirectResponseBody } from "@vercel/sdk/models/createintegrationstoredirectresponsebody.js";

let value: CreateIntegrationStoreDirectResponseBody = {
  store: {
    projectsMetadata: [],
    status: "limits-exceeded-suspended-store-count",
    usageQuotaExceeded: false,
    externalResourceId: "<id>",
    product: {
      resourceTitle: "Instance",
      integration: {
        icon: "<value>",
        id: "<id>",
        name: "<value>",
        slug: "<value>",
      },
      integrationConfigurationId: "<id>",
      supportedProtocols: [
        "ai",
      ],
    },
    secrets: [],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `store`                                                                                    | [models.CreateIntegrationStoreDirectStore](../models/createintegrationstoredirectstore.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |