# FiveHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFive } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FiveHundredAndFive = {
  action: "remove-passkey",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload505Action](../models/usereventpayload505action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |