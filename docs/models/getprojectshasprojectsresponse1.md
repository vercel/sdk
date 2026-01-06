# GetProjectsHasProjectsResponse1

## Example Usage

```typescript
import { GetProjectsHasProjectsResponse1 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsHasProjectsResponse1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | *"header"*                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `key`                                                                                                                              | [models.GetProjectsHasProjectsKey](../models/getprojectshasprojectskey.md)                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `value`                                                                                                                            | [models.GetProjectsHasProjectsResponse200ApplicationJSONValue](../models/getprojectshasprojectsresponse200applicationjsonvalue.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |