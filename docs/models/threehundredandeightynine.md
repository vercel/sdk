# ThreeHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyNine } from "@vercel/sdk/models/payloadmostspecificsubdivision.js";

let value: ThreeHundredAndEightyNine = {
  actorId: "<id>",
  actorType: "admin",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Okta user id.                                                                    |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload389ActorType](../models/usereventpayload389actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |