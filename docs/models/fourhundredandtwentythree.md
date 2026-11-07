# FourHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayload403type.js";

let value: FourHundredAndTwentyThree = {
  action: "reset",
  targetId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload423Action](../models/usereventpayload423action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `targetId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |