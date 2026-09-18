# FourHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundred } from "@vercel/sdk/models/payloadcountry.js";

let value: FourHundred = {
  enabled: false,
  scope: "log-drains",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `enabled`                                        | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `scope`                                          | [models.PayloadScope](../models/payloadscope.md) | :heavy_check_mark:                               | N/A                                              |