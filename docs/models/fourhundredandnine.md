# FourHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNine } from "@vercel/sdk/models/usereventpayload387scope.js";

let value: FourHundredAndNine = {
  action: "reset",
  targetId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload409Action](../models/usereventpayload409action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `targetId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |