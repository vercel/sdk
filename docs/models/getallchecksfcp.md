# GetAllChecksFCP

## Example Usage

```typescript
import { GetAllChecksFCP } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksFCP = {
  source: "web-vitals",
  value: 8781.79,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `previousValue`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `source`                                                                 | [models.GetAllChecksChecksSource](../models/getallcheckscheckssource.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `value`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |