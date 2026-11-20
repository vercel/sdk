# ThreeHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightySix } from "@vercel/sdk/models/oldssoprotection2.js";

let value: ThreeHundredAndEightySix = {
  connectionId: "<id>",
  actorType: "admin",
  certificateFingerprints: [],
  created: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `connectionId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `actorName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `actorType`                                                                      | [models.UserEventPayload386ActorType](../models/usereventpayload386actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `certificateFingerprints`                                                        | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `attributeMappingChanged`                                                        | *true*                                                                           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `created`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousCertificateFingerprints`                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |