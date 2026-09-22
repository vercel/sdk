# GetProjectHasProjectsResponse1

## Example Usage

```typescript
import { GetProjectHasProjectsResponse1 } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectHasProjectsResponse1 = {
  key: "x-vercel-ip-country",
  type: "header",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                            | [models.GetProjectHasKey](../models/getprojecthaskey.md)                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `type`                                                                                                                           | *"header"*                                                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `value`                                                                                                                          | [models.GetProjectHasProjectsResponse200ApplicationJSONValue](../models/getprojecthasprojectsresponse200applicationjsonvalue.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |