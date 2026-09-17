# FourHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwenty } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndTwenty = {
  action: "remove-passkey",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload420Action](../models/usereventpayload420action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |