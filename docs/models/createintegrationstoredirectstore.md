# CreateIntegrationStoreDirectStore

## Example Usage

```typescript
import { CreateIntegrationStoreDirectStore } from "@vercel/sdk/models/createintegrationstoredirectop.js";

let value: CreateIntegrationStoreDirectStore = {
  projectsMetadata: [],
  usageQuotaExceeded: true,
  status: "limits-exceeded-suspended",
  externalResourceId: "<id>",
  product: {
    value: {
      atBRANDAt8487: {},
    },
  },
  secrets: [
    {
      name: "<value>",
      length: 96.14,
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `projectsMetadata`                                                                                               | [models.ProjectsMetadata](../models/projectsmetadata.md)[]                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `totalConnectedProjects`                                                                                         | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `usageQuotaExceeded`                                                                                             | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [models.CreateIntegrationStoreDirectStatus](../models/createintegrationstoredirectstatus.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `ownership`                                                                                                      | [models.CreateIntegrationStoreDirectOwnership](../models/createintegrationstoredirectownership.md)               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `capabilities`                                                                                                   | [models.Capabilities](../models/capabilities.md)                                                                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `metadata`                                                                                                       | Record<string, *models.CreateIntegrationStoreDirectMetadata*>                                                    | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `externalResourceId`                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `externalResourceStatus`                                                                                         | [models.ExternalResourceStatus](../models/externalresourcestatus.md)                                             | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `product`                                                                                                        | [models.Product](../models/product.md)                                                                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `protocolSettings`                                                                                               | [models.CreateIntegrationStoreDirectProtocolSettings](../models/createintegrationstoredirectprotocolsettings.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `notification`                                                                                                   | [models.CreateIntegrationStoreDirectNotification](../models/createintegrationstoredirectnotification.md)         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `secrets`                                                                                                        | [models.CreateIntegrationStoreDirectSecrets](../models/createintegrationstoredirectsecrets.md)[]                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `billingPlan`                                                                                                    | [models.CreateIntegrationStoreDirectBillingPlan](../models/createintegrationstoredirectbillingplan.md)           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |