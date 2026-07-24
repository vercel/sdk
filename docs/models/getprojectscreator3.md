# GetProjectsCreator3

## Example Usage

```typescript
import { GetProjectsCreator3 } from "@vercel/sdk/models/getprojectscontenthint3.js";

let value: GetProjectsCreator3 = {
  type: "integration",
  integration: {
    integrationId: "<id>",
    configurationId: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | *"integration"*                                                                    | :heavy_check_mark:                                                                 | N/A                                                                                |
| `integration`                                                                      | [models.GetProjectsCreatorIntegration](../models/getprojectscreatorintegration.md) | :heavy_check_mark:                                                                 | N/A                                                                                |