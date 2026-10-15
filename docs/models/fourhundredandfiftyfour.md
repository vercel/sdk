# FourHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyFour } from "@vercel/sdk/models/env.js";

let value: FourHundredAndFiftyFour = {
  action: "add-passkey",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload454Action](../models/usereventpayload454action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |