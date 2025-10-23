# GetDrainsSource2

## Example Usage

```typescript
import { GetDrainsSource2 } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsSource2 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `kind`                                                                     | [models.GetDrainsSourceDrainsKind](../models/getdrainssourcedrainskind.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `resourceId`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `externalResourceId`                                                       | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `integrationId`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `integrationConfigurationId`                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |