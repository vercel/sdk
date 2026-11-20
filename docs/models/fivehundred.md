# FiveHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundred } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FiveHundred = {
  action: "disable",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload500Action](../models/usereventpayload500action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |