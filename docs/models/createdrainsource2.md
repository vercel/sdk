# CreateDrainSource2

## Example Usage

```typescript
import { CreateDrainSource2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainSource2 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `kind`                                                                                               | [models.CreateDrainSourceDrainsResponse200Kind](../models/createdrainsourcedrainsresponse200kind.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `resourceId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `externalResourceId`                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `integrationId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `integrationConfigurationId`                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |