# ResponseBody3

Successful response retrieving a list of paginated DNS records.

## Example Usage

```typescript
import { ResponseBody3 } from "@vercel/sdk/models/getrecordsop.js";

let value: ResponseBody3 = {
  records: [
    {
      id: "<id>",
      slug: "<value>",
      name: "<value>",
      type: "CNAME",
      value: "<value>",
      creator: "<value>",
      created: 9596.96,
      updated: 2402.92,
      createdAt: 7631.4,
      updatedAt: 8701.83,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `records`                                                                                                                                                       | [models.ResponseBodyRecords](../models/responsebodyrecords.md)[]                                                                                                | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |