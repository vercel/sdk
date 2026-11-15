# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndEighty = {
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
| `actorType`                                                                      | [models.UserEventPayload380ActorType](../models/usereventpayload380actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |