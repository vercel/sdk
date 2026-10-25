# FourHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyNine } from "@vercel/sdk/models/fourhundredandfifty.js";

let value: FourHundredAndFiftyNine = {
  actorId: "<id>",
  actorType: "admin",
  enabled: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload459ActorType](../models/usereventpayload459actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |