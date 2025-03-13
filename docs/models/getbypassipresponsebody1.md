# GetBypassIpResponseBody1

## Example Usage

```typescript
import { GetBypassIpResponseBody1 } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBody1 = {
  result: [
    {
      ownerId: "<id>",
      id: "<id>",
      domain: "slimy-pulse.name",
      ip: "2d8d:6c9d:51a9:c0ed:d08f:e3af:b0d5:28c0",
      createdAt: "1727918630854",
      updatedAt: "1741782298697",
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