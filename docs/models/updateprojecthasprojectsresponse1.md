# UpdateProjectHasProjectsResponse1

## Example Usage

```typescript
import { UpdateProjectHasProjectsResponse1 } from "@vercel/sdk/models/updateprojectinternalroutes.js";

let value: UpdateProjectHasProjectsResponse1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | *"header"*                                                                                                                             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `key`                                                                                                                                  | [models.UpdateProjectHasKey](../models/updateprojecthaskey.md)                                                                         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | [models.UpdateProjectHasProjectsResponse200ApplicationJSONValue](../models/updateprojecthasprojectsresponse200applicationjsonvalue.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |