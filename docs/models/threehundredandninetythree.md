# ThreeHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyThree } from "@vercel/sdk/models/usereventpayload385project.js";

let value: ThreeHundredAndNinetyThree = {
  certificateFingerprints: [
    "<value 1>",
    "<value 2>",
  ],
  connectionId: "<id>",
  created: true,
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