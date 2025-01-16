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
      type: "CAA",
      value: "<value>",
      creator: "<value>",
      created: 8488.33,
      updated: 8048.79,
      createdAt: 9983.55,
      updatedAt: 8473.08,
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `records`                                | [models.Records](../models/records.md)[] | :heavy_check_mark:                       | N/A                                      |