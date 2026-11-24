# FourHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyEight } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndFortyEight = {
  action: "updated",
  targetId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload448Action](../models/usereventpayload448action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `targetId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |