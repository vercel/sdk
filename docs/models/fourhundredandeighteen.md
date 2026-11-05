# FourHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighteen } from "@vercel/sdk/models/store.js";

let value: FourHundredAndEighteen = {
  action: "updated",
  targetId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload418Action](../models/usereventpayload418action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `targetId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |