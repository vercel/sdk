# UpdateProjectCreator3

## Example Usage

```typescript
import { UpdateProjectCreator3 } from "@vercel/sdk/models/updateprojectbranchmatcher.js";

let value: UpdateProjectCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"integration"*                                                                        | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `integration`                                                                          | [models.UpdateProjectCreatorIntegration](../models/updateprojectcreatorintegration.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |