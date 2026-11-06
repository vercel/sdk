# FourHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyNine } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FourHundredAndSixtyNine = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload469ActorType](../models/usereventpayload469actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |