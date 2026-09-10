# CreateIntegrationStoreDirectDeployments

## Example Usage

```typescript
import { CreateIntegrationStoreDirectDeployments } from "@vercel/sdk/models/createintegrationstoredirectpropertiesintegrationsitems.js";

let value: CreateIntegrationStoreDirectDeployments = {
  required: false,
  actions: [
    {
      slug: "<value>",
      environments: [
        "<value 1>",
        "<value 2>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `required`                                                                                       | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `actions`                                                                                        | [models.CreateIntegrationStoreDirectActions](../models/createintegrationstoredirectactions.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |