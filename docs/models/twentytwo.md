# TwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyTwo } from "@vercel/sdk/models/twenty.js";

let value: TwentyTwo = {
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