# Creator3

## Example Usage

```typescript
import { Creator3 } from "@vercel/sdk/models/createprojectbuildmachineselection.js";

let value: Creator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"integration"*                                              | :heavy_check_mark:                                           | N/A                                                          |
| `integration`                                                | [models.CreatorIntegration](../models/creatorintegration.md) | :heavy_check_mark:                                           | N/A                                                          |