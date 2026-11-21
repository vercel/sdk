# UserEventPayload550Geolocation

## Example Usage

```typescript
import { UserEventPayload550Geolocation } from "@vercel/sdk/models/payloadoutcome.js";

let value: UserEventPayload550Geolocation = {
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
| `city`                                                                                                       | [models.UserEventPayload550City](../models/usereventpayload550city.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `country`                                                                                                    | [models.UserEventPayload550Country](../models/usereventpayload550country.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `mostSpecificSubdivision`                                                                                    | [models.UserEventPayload550MostSpecificSubdivision](../models/usereventpayload550mostspecificsubdivision.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `regionName`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |