# FourHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndForty } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndForty = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload440ActorType](../models/usereventpayload440actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |