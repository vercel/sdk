# OneHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFive } from "@vercel/sdk/models/onehundredandtwentyfour.js";

let value: OneHundredAndTwentyFive = {
  edgeConfig: {
    id: "<id>",
    slug: "<value>",
  },
  fromAccount: {
    id: "<id>",
    type: "team",
  },
  toAccount: {
    id: "<id>",
    type: "team",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `edgeConfig`                                   | [models.EdgeConfig](../models/edgeconfig.md)   | :heavy_check_mark:                             | N/A                                            |
| `fromAccount`                                  | [models.FromAccount](../models/fromaccount.md) | :heavy_check_mark:                             | N/A                                            |
| `toAccount`                                    | [models.ToAccount](../models/toaccount.md)     | :heavy_check_mark:                             | N/A                                            |