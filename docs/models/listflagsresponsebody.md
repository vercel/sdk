# ListFlagsResponseBody

## Example Usage

```typescript
import { ListFlagsResponseBody } from "@vercel/sdk/models/listflagsop.js";

let value: ListFlagsResponseBody = {
  data: [],
  pagination: {
    next: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [models.Flag](../models/flag.md)[]                             | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [models.ListFlagsPagination](../models/listflagspagination.md) | :heavy_check_mark:                                             | N/A                                                            |