# CreateDrainSourceDrains2

## Example Usage

```typescript
import { CreateDrainSourceDrains2 } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainSourceDrains2 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kind`                                                                         | [models.CreateDrainSourceDrainsKind](../models/createdrainsourcedrainskind.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `resourceId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `externalResourceId`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `integrationId`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `integrationConfigurationId`                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |