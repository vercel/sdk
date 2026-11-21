# FiveHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFour } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FiveHundredAndFour = {
  action: "admin-remove",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload504Action](../models/usereventpayload504action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |