# ThreeHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightySeven } from "@vercel/sdk/models/oldssoprotection2.js";

let value: ThreeHundredAndEightySeven = {
  certificateFingerprints: [],
  connectionId: "<id>",
  created: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `attributeMappingChanged`         | *true*                            | :heavy_minus_sign:                | N/A                               |
| `certificateFingerprints`         | *string*[]                        | :heavy_check_mark:                | N/A                               |
| `connectionId`                    | *string*                          | :heavy_check_mark:                | N/A                               |
| `created`                         | *boolean*                         | :heavy_check_mark:                | N/A                               |
| `previousCertificateFingerprints` | *string*[]                        | :heavy_minus_sign:                | N/A                               |