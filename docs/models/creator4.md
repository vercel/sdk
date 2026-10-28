# Creator4

## Example Usage

```typescript
import { Creator4 } from "@vercel/sdk/models/createprojecthaskey.js";

let value: Creator4 = {
  integration: {
    configurationId: "<id>",
    integrationId: "<id>",
  },
  type: "integration",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `integration`                                                | [models.CreatorIntegration](../models/creatorintegration.md) | :heavy_check_mark:                                           | N/A                                                          |
| `type`                                                       | *"integration"*                                              | :heavy_check_mark:                                           | N/A                                                          |