# UpdateDrainSourceDrains2

## Example Usage

```typescript
import { UpdateDrainSourceDrains2 } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainSourceDrains2 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kind`                                                                         | [models.UpdateDrainSourceDrainsKind](../models/updatedrainsourcedrainskind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `resourceId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `externalResourceId`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationConfigurationId`                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |