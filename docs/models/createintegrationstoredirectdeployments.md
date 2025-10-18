# CreateIntegrationStoreDirectDeployments

## Example Usage

```typescript
import { CreateIntegrationStoreDirectDeployments } from "@vercel/sdk/models/createintegrationstoredirectop.js";

let value: CreateIntegrationStoreDirectDeployments = {
  required: false,
  actions: [
    {
      slug: "<value>",
      environments: [
        "production",
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