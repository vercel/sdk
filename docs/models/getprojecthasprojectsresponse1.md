# GetProjectHasProjectsResponse1

## Example Usage

```typescript
import { GetProjectHasProjectsResponse1 } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectHasProjectsResponse1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | *"header"*                                                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `key`                                                                                                                            | [models.GetProjectHasKey](../models/getprojecthaskey.md)                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | [models.GetProjectHasProjectsResponse200ApplicationJSONValue](../models/getprojecthasprojectsresponse200applicationjsonvalue.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |