# GetProjectsResponseBodyProjectsTrustedOidcProviders

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsTrustedOidcProviders } from "@vercel/sdk/models/getprojectshasprojectsresponse200applicationjsonresponsebody22.js";

let value: GetProjectsResponseBodyProjectsTrustedOidcProviders = {
  projects: {
    "key": {
      environments: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  },
  providers: {},
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `projects`                                                                                                                                   | Record<string, [models.GetProjectsResponseBodyProjectsResponse200Projects](../models/getprojectsresponsebodyprojectsresponse200projects.md)> | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `providers`                                                                                                                                  | Record<string, [models.GetProjectsResponseBodyProjectsProviders](../models/getprojectsresponsebodyprojectsproviders.md)>                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |