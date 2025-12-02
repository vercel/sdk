# CreateProjectHasProjectsResponse1

## Example Usage

```typescript
import { CreateProjectHasProjectsResponse1 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectHasProjectsResponse1 = {
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
| `key`                                                                                                                                  | [models.CreateProjectHasKey](../models/createprojecthaskey.md)                                                                         | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `value`                                                                                                                                | [models.CreateProjectHasProjectsResponse200ApplicationJSONValue](../models/createprojecthasprojectsresponse200applicationjsonvalue.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |