# FourHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyThree } from "@vercel/sdk/models/fourhundredandfourteen.js";

let value: FourHundredAndThirtyThree = {
  action: "add-totp",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload433Action](../models/usereventpayload433action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |