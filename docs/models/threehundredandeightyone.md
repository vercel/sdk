# ThreeHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyOne } from "@vercel/sdk/models/threehundredandsixtyseven.js";

let value: ThreeHundredAndEightyOne = {
  action: "remove-passkey",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload381Action](../models/usereventpayload381action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |