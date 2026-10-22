# ListFlagLabelsResponseBody

## Example Usage

```typescript
import { ListFlagLabelsResponseBody } from "@vercel/sdk/models/listflaglabelsop.js";

let value: ListFlagLabelsResponseBody = {
  data: [
    {
      attributeKey: "<value>",
      entityKind: "<value>",
      label: "<value>",
      value: "<value>",
    },
  ],
  pagination: {
    next: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.ListFlagLabelsData](../models/listflaglabelsdata.md)[]           | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [models.ListFlagLabelsPagination](../models/listflaglabelspagination.md) | :heavy_check_mark:                                                       | N/A                                                                      |