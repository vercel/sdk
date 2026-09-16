# GetRouteVersionsResponseBody

## Example Usage

```typescript
import { GetRouteVersionsResponseBody } from "@vercel/sdk/models/getrouteversionsop.js";

let value: GetRouteVersionsResponseBody = {
  versions: [
    {
      createdBy: "<value>",
      id: "<id>",
      lastModified: 234.54,
      s3Key: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `versions`                                                                 | [models.GetRouteVersionsVersions](../models/getrouteversionsversions.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |