# ResponseBody2

## Example Usage

```typescript
import { ResponseBody2 } from "@vercel/sdk/models/listaccessgroupsop.js";

let value: ResponseBody2 = {
  accessGroups: [],
  pagination: {
    count: 6694.72,
    next: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accessGroups`                                                       | [models.AccessGroups](../models/accessgroups.md)[]                   | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [models.ResponseBodyPagination](../models/responsebodypagination.md) | :heavy_check_mark:                                                   | N/A                                                                  |