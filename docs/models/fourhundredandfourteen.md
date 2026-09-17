# FourHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFourteen } from "@vercel/sdk/models/fourhundredandone.js";

let value: FourHundredAndFourteen = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload414ActorType](../models/usereventpayload414actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |