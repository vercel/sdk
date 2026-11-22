# ThreeHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyNine } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: ThreeHundredAndEightyNine = {
  connectionId: "<id>",
  actorType: "admin",
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  created: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload389ActorType](../models/usereventpayload389actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `certificateFingerprints`                                                        | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `attributeMappingChanged`                                                        | *true*                                                                           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `created`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousCertificateFingerprints`                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `rebind`                                                                         | *true*                                                                           | :heavy_minus_sign:                                                               | The IdP or the user id rule changed, so members re-bind by email once.           |