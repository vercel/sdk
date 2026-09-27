# FourHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyOne } from "@vercel/sdk/models/fourhundredandsixteen.js";

let value: FourHundredAndThirtyOne = {
  actorId: "<id>",
  actorType: "admin",
  enabled: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload431ActorType](../models/usereventpayload431actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |