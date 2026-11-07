# ThreeHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyOne } from "@vercel/sdk/models/principalintegration.js";

let value: ThreeHundredAndSeventyOne = {
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
| `actorType`                                                                      | [models.UserEventPayload371ActorType](../models/usereventpayload371actortype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `certificateFingerprints`                                                        | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `created`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `previousCertificateFingerprints`                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |