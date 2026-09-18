# FourHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyOne } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndTwentyOne = {
  actorId: "<id>",
  actorType: "admin",
  enabled: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload421ActorType](../models/usereventpayload421actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |