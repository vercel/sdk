# ThreeHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinety } from "@vercel/sdk/models/payloadstaticips.js";

let value: ThreeHundredAndNinety = {
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
  ],
  connectionId: "<id>",
  created: false,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `attributeMappingChanged`                                              | *true*                                                                 | :heavy_minus_sign:                                                     | N/A                                                                    |
| `certificateFingerprints`                                              | *string*[]                                                             | :heavy_check_mark:                                                     | N/A                                                                    |
| `connectionId`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `created`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `previousCertificateFingerprints`                                      | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `rebind`                                                               | *true*                                                                 | :heavy_minus_sign:                                                     | The IdP or the user id rule changed, so members re-bind by email once. |