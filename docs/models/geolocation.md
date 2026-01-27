# Geolocation

## Example Usage

```typescript
import { Geolocation } from "@vercel/sdk/models/userevent.js";

let value: Geolocation = {
  country: {
    names: {
      en: "<value>",
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `city`                                                                 | [models.City](../models/city.md)                                       | :heavy_minus_sign:                                                     | N/A                                                                    |
| `country`                                                              | [models.Country](../models/country.md)                                 | :heavy_check_mark:                                                     | N/A                                                                    |
| `mostSpecificSubdivision`                                              | [models.MostSpecificSubdivision](../models/mostspecificsubdivision.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `regionName`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |