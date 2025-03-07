# ImportResourceRequest

## Example Usage

```typescript
import { ImportResourceRequest } from "@vercel/sdk/models/importresourceop.js";

let value: ImportResourceRequest = {
  integrationConfigurationId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `integrationConfigurationId`                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `resourceId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `requestBody`                                                              | [models.ImportResourceRequestBody](../models/importresourcerequestbody.md) | :heavy_minus_sign:                                                         | N/A                                                                        |