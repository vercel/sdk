# UserEventPayload328Geolocation

## Example Usage

```typescript
import { UserEventPayload328Geolocation } from "@vercel/sdk/models/payloadenvironment.js";

let value: UserEventPayload328Geolocation = {
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
| `city`                                                                                                       | [models.UserEventPayload328City](../models/usereventpayload328city.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `country`                                                                                                    | [models.UserEventPayload328Country](../models/usereventpayload328country.md)                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `mostSpecificSubdivision`                                                                                    | [models.UserEventPayload328MostSpecificSubdivision](../models/usereventpayload328mostspecificsubdivision.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `regionName`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |