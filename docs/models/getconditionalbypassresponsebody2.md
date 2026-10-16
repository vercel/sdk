# GetConditionalBypassResponseBody2

## Example Usage

```typescript
import { GetConditionalBypassResponseBody2 } from "@vercel/sdk/models/getconditionalbypassop.js";

let value: GetConditionalBypassResponseBody2 = {
  pagination: {
    next: "<value>",
  },
  result: [
    {
      conditionGroup: [
        {
          conditions: [
            {
              op: "lt",
              type: "region",
            },
          ],
        },
      ],
      domain: "weekly-middle.net",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                           | [models.GetConditionalBypassResponseBodyPagination](../models/getconditionalbypassresponsebodypagination.md)           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [models.GetConditionalBypassResponseBodySecurityResult](../models/getconditionalbypassresponsebodysecurityresult.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |