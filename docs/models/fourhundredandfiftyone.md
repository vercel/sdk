# FourHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyOne } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndFiftyOne = {
  action: "regenerate-recovery-codes",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload451Action](../models/usereventpayload451action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |