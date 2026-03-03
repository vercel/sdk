# TwoHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftySeven } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndFiftySeven = {
  edgeConfig: {
    id: "<id>",
    slug: "<value>",
  },
  fromAccount: {
    id: "<id>",
    type: "user",
  },
  toAccount: {
    id: "<id>",
    type: "user",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `edgeConfig`                                   | [models.EdgeConfig](../models/edgeconfig.md)   | :heavy_check_mark:                             | N/A                                            |
| `fromAccount`                                  | [models.FromAccount](../models/fromaccount.md) | :heavy_check_mark:                             | N/A                                            |
| `toAccount`                                    | [models.ToAccount](../models/toaccount.md)     | :heavy_check_mark:                             | N/A                                            |