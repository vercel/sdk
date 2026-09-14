# ThreeHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyOne } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndNinetyOne = {
  enabled: true,
  scope: "log-drains",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `enabled`                                        | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `scope`                                          | [models.PayloadScope](../models/payloadscope.md) | :heavy_check_mark:                               | N/A                                              |