# ThreeHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyOne } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: ThreeHundredAndEightyOne = {
  connectionId: "<id>",
  actorType: "admin",
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  created: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload381ActorType](../models/usereventpayload381actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `certificateFingerprints`                                                        | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `created`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousCertificateFingerprints`                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |