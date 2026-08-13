# ThreeHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyEight } from "@vercel/sdk/models/payloadfactors.js";

let value: ThreeHundredAndSeventyEight = {
  enabled: false,
  scope: "dashboard",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `enabled`                                        | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `scope`                                          | [models.PayloadScope](../models/payloadscope.md) | :heavy_check_mark:                               | N/A                                              |