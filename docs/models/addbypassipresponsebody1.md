# AddBypassIpResponseBody1

## Example Usage

```typescript
import { AddBypassIpResponseBody1 } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpResponseBody1 = {
  ok: false,
  result: [
    {
      ownerId: "<id>",
      id: "<id>",
      domain: "well-to-do-wilderness.biz",
      projectId: "<id>",
      note: "<value>",
      isProjectRule: false,
    },
  ],
  pagination: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `ok`                                                                                 | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [models.AddBypassIpResponseBodyResult](../models/addbypassipresponsebodyresult.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | *any*                                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |