# GetRouteVersionsResponseBody

## Example Usage

```typescript
import { GetRouteVersionsResponseBody } from "@vercel/sdk/models/getrouteversionsop.js";

let value: GetRouteVersionsResponseBody = {
  versions: [
    {
      id: "<id>",
      s3Key: "<value>",
      lastModified: 234.54,
      createdBy: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `versions`                                                                 | [models.GetRouteVersionsVersions](../models/getrouteversionsversions.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |