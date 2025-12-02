# UpdateProjectDataCacheHas1

## Example Usage

```typescript
import { UpdateProjectDataCacheHas1 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: UpdateProjectDataCacheHas1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                   | *"header"*                                                                                                                                               | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `key`                                                                                                                                                    | [models.UpdateProjectDataCacheHasProjectsKey](../models/updateprojectdatacachehasprojectskey.md)                                                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `value`                                                                                                                                                  | [models.UpdateProjectDataCacheHasProjectsResponse200ApplicationJSONValue](../models/updateprojectdatacachehasprojectsresponse200applicationjsonvalue.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |