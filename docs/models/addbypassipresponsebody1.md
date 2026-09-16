# AddBypassIpResponseBody1

## Example Usage

```typescript
import { AddBypassIpResponseBody1 } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpResponseBody1 = {
  ok: true,
  pagination: null,
  result: [
    {
      domain: "steel-nightlife.info",
      id: "<id>",
      isProjectRule: true,
      note: "<value>",
      ownerId: "<id>",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `ok`                                                           | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | *any*                                                          | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [models.ResponseBodyResult](../models/responsebodyresult.md)[] | :heavy_check_mark:                                             | N/A                                                            |