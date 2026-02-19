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
      resourceTitle: "Instance",
      integration: {
        id: "<id>",
        name: "<value>",
        slug: "<value>",
        icon: "<value>",
      },
      integrationConfigurationId: "<id>",
      supportedProtocols: [
        "experimentation",
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