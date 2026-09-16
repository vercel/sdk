# GetAllChecksCLS

## Example Usage

```typescript
import { GetAllChecksCLS } from "@vercel/sdk/models/getallchecksop.js";

let value: GetAllChecksCLS = {
  source: "web-vitals",
  value: 7790.51,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `previousValue`                                              | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `source`                                                     | [models.GetAllChecksSource](../models/getallcheckssource.md) | :heavy_check_mark:                                           | N/A                                                          |
| `value`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |