# UserEventPayload422Geolocation

## Example Usage

```typescript
import { UserEventPayload422Geolocation } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: UserEventPayload422Geolocation = {
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
| `city`                                                                                                       | [models.UserEventPayload422City](../models/usereventpayload422city.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `country`                                                                                                    | [models.UserEventPayload422Country](../models/usereventpayload422country.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `mostSpecificSubdivision`                                                                                    | [models.UserEventPayload422MostSpecificSubdivision](../models/usereventpayload422mostspecificsubdivision.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `regionName`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |