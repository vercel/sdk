# ThreeHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyNine } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndSixtyNine = {
  connectionId: "<id>",
  actorType: "admin",
  keyId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload369ActorType](../models/usereventpayload369actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |