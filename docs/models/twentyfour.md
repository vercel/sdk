# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/userevent.js";

let value: TwentyFour = {
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