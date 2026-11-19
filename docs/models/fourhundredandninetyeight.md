# FourHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyEight } from "@vercel/sdk/models/usereventpayloadtargetkind.js";

let value: FourHundredAndNinetyEight = {
  action: "remove-passkey",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload498Action](../models/usereventpayload498action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |