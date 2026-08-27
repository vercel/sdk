# UserEventPayload440Geolocation

## Example Usage

```typescript
import { UserEventPayload440Geolocation } from "@vercel/sdk/models/fourhundred.js";

let value: UserEventPayload440Geolocation = {
  country: {
    names: {
      en: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `city`                                                                                                       | [models.UserEventPayload440City](../models/usereventpayload440city.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `country`                                                                                                    | [models.UserEventPayload440Country](../models/usereventpayload440country.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `mostSpecificSubdivision`                                                                                    | [models.UserEventPayload440MostSpecificSubdivision](../models/usereventpayload440mostspecificsubdivision.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `regionName`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |