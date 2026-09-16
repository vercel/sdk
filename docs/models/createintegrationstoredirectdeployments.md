# CreateIntegrationStoreDirectDeployments

## Example Usage

```typescript
import { CreateIntegrationStoreDirectDeployments } from "@vercel/sdk/models/createintegrationstoredirectpropertiesintegrationsresponse200uioptions.js";

let value: CreateIntegrationStoreDirectDeployments = {
  actions: [
    {
      environments: [
        "<value 1>",
        "<value 2>",
      ],
      slug: "<value>",
    },
  ],
  required: false,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `actions`                                                                                        | [models.CreateIntegrationStoreDirectActions](../models/createintegrationstoredirectactions.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `required`                                                                                       | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |