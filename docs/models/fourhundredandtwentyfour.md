# FourHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyFour } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndTwentyFour = {
  action: "reset",
  targetId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload424Action](../models/usereventpayload424action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `targetId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |