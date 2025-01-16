# GetBypassIpResponseBody1

## Example Usage

```typescript
import { GetBypassIpResponseBody1 } from "@vercel/sdk/models/getbypassipop.js";

let value: GetBypassIpResponseBody1 = {
  result: [
    {
      ownerId: "<id>",
      id: "<id>",
      domain: "perky-mouser.name",
      ip: "2135:dd5a:a9ba:a3bc:3ad4:a1ea:729e:26ce",
      projectId: "<id>",
      isProjectRule: false,
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