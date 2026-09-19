# FourHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyNine } from "@vercel/sdk/models/fourhundredandten.js";

let value: FourHundredAndTwentyNine = {
  action: "add-totp",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload429Action](../models/usereventpayload429action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |