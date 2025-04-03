# GetBypassIpResponseBody1

## Example Usage

```typescript
import { GetBypassIpResponseBody1 } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBody1 = {
  result: [
    {
      ownerId: "<id>",
      id: "<id>",
      domain: "purple-receptor.net",
      ip: "25.93.15.98",
      createdAt: "1724450040919",
      updatedAt: "1743693768433",
      updatedAtHour: "<value>",
    },
  ],
  pagination: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `result`                                                       | [models.ResponseBodyResult](../models/responsebodyresult.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | *any*                                                          | :heavy_check_mark:                                             | N/A                                                            |