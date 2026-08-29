# UserEventPayload443Geolocation

## Example Usage

```typescript
import { UserEventPayload443Geolocation } from "@vercel/sdk/models/fourhundredandone.js";

let value: UserEventPayload443Geolocation = {
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
| `city`                                                                                                       | [models.UserEventPayload443City](../models/usereventpayload443city.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `country`                                                                                                    | [models.UserEventPayload443Country](../models/usereventpayload443country.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `mostSpecificSubdivision`                                                                                    | [models.UserEventPayload443MostSpecificSubdivision](../models/usereventpayload443mostspecificsubdivision.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `regionName`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |