# ThreeHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinety } from "@vercel/sdk/models/usereventpayload339budget.js";

let value: ThreeHundredAndNinety = {
  enabled: false,
  scope: "log-drains",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `enabled`                                        | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `scope`                                          | [models.PayloadScope](../models/payloadscope.md) | :heavy_check_mark:                               | N/A                                              |