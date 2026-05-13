# UserEventPayloadGeolocation

optional since entries prior to 2026-04-23 do not contain this field

## Example Usage

```typescript
import { UserEventPayloadGeolocation } from "@vercel/sdk/models/enabled.js";

let value: UserEventPayloadGeolocation = {
  country: {
    names: {
      en: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `city`                                                                                                 | [models.UserEventPayloadCity](../models/usereventpayloadcity.md)                                       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `country`                                                                                              | [models.UserEventPayloadCountry](../models/usereventpayloadcountry.md)                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `mostSpecificSubdivision`                                                                              | [models.UserEventPayloadMostSpecificSubdivision](../models/usereventpayloadmostspecificsubdivision.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `regionName`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |