# PayloadGeolocation

## Example Usage

```typescript
import { PayloadGeolocation } from "@vercel/sdk/models/payloadenablepreviewfeedback.js";

let value: PayloadGeolocation = {
  country: {
    names: {
      en: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `city`                                                                               | [models.PayloadCity](../models/payloadcity.md)                                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `country`                                                                            | [models.PayloadCountry](../models/payloadcountry.md)                                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `mostSpecificSubdivision`                                                            | [models.PayloadMostSpecificSubdivision](../models/payloadmostspecificsubdivision.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `regionName`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |