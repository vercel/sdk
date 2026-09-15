# FourHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEleven } from "@vercel/sdk/models/fourhundredandnine.js";

let value: FourHundredAndEleven = {
  enabled: false,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload411ActorType](../models/usereventpayload411actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |