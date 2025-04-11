# GetRecordsResponseBody2

## Example Usage

```typescript
import { GetRecordsResponseBody2 } from "@vercel/sdk/models/getrecordsop.js";

let value: GetRecordsResponseBody2 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "CNAME",
      value: "<value>",
      creator: "<value>",
      created: 8418.46,
      updated: 6897.18,
      createdAt: 4211.86,
      updatedAt: 1039.66,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `records`                                | [models.Records](../models/records.md)[] | :heavy_check_mark:                       | N/A                                      |