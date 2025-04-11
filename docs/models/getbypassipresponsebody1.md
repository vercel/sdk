# GetBypassIpResponseBody1

## Example Usage

```typescript
import { GetBypassIpResponseBody1 } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBody1 = {
  result: [
    {
      ownerId: "<id>",
      id: "<id>",
      domain: "equatorial-programme.name",
      ip: "41dc:c03b:1f0c:7dc5:a8fc:6d26:a38d:88e6",
      createdAt: "1726502317486",
      updatedAt: "1744322160309",
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