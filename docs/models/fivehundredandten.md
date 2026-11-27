# FiveHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTen } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FiveHundredAndTen = {
  action: "add-totp",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload510Action](../models/usereventpayload510action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |