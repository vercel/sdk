# ThreeHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyEight } from "@vercel/sdk/models/threehundredandsixtyone.js";

let value: ThreeHundredAndSeventyEight = {
  connectionId: "<id>",
  actorType: "admin",
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
  ],
  created: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload378ActorType](../models/usereventpayload378actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `certificateFingerprints`                                                        | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `created`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousCertificateFingerprints`                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |