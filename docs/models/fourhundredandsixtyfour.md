# FourHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyFour } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSixtyFour = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload464ActorType](../models/usereventpayload464actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |