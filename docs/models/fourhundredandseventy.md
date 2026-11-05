# FourHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventy } from "@vercel/sdk/models/usereventpayload464actortype.js";

let value: FourHundredAndSeventy = {
  actorId: "<id>",
  actorType: "admin",
  enabled: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload470ActorType](../models/usereventpayload470actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |