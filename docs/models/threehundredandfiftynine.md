# ThreeHundredAndFiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyNine } from "@vercel/sdk/models/usereventpayload318project.js";

let value: ThreeHundredAndFiftyNine = {
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
| `actorType`                                                                      | [models.UserEventPayload359ActorType](../models/usereventpayload359actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `keyId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |