# ThreeHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyEight } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: ThreeHundredAndEightyEight = {
  enabled: true,
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload388ActorType](../models/usereventpayload388actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |