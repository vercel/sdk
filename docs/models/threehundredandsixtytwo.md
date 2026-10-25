# ThreeHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyTwo } from "@vercel/sdk/models/threehundredandtwentyfour.js";

let value: ThreeHundredAndSixtyTwo = {
  connectionId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload362ActorType](../models/usereventpayload362actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |