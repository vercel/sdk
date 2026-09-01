# FourHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEight } from "@vercel/sdk/models/fourhundredandtwo.js";

let value: FourHundredAndEight = {
  action: "regenerate-recovery-codes",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload408Action](../models/usereventpayload408action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |