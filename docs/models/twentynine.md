# TwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyNine } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: TwentyNine = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `accessPolicy`                                   | [models.AccessPolicy](../models/accesspolicy.md) | :heavy_check_mark:                               | N/A                                              |