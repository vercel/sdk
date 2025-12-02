# Has1

## Example Usage

```typescript
import { Has1 } from "@vercel/sdk/models/updateprojectdatacacheop.js";

let value: Has1 = {
  type: "header",
  key: "x-vercel-ip-country",
  value: {
    eq: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"header"*                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `key`                                                                                | [models.Key](../models/key.md)                                                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `value`                                                                              | [models.UpdateProjectDataCacheHasValue](../models/updateprojectdatacachehasvalue.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |