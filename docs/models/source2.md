# Source2

## Example Usage

```typescript
import { Source2 } from "@vercel/sdk/models/getintegrationlogdrainsop.js";

let value: Source2 = {
  kind: "integration",
  integrationId: "<id>",
  integrationConfigurationId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `kind`                                       | [models.SourceKind](../models/sourcekind.md) | :heavy_check_mark:                           | N/A                                          |
| `resourceId`                                 | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `externalResourceId`                         | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `integrationId`                              | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `integrationConfigurationId`                 | *string*                                     | :heavy_check_mark:                           | N/A                                          |