# FourHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighty } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FourHundredAndEighty = {
  action: "admin-remove",
  reason: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventPayload480Action](../models/usereventpayload480action.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `reason`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |