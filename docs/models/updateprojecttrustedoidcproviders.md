# UpdateProjectTrustedOidcProviders

## Example Usage

```typescript
import { UpdateProjectTrustedOidcProviders } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonresponsebodyaction.js";

let value: UpdateProjectTrustedOidcProviders = {
  projects: {
    "key": {
      environments: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
  providers: {
    "key": {
      claims: {
        "key": [
          "<value 1>",
          "<value 2>",
        ],
        "key1": [
          "<value 1>",
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projects`                                                                                         | Record<string, [models.UpdateProjectProjectsProjects](../models/updateprojectprojectsprojects.md)> | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `providers`                                                                                        | Record<string, [models.UpdateProjectProviders](../models/updateprojectproviders.md)>               | :heavy_check_mark:                                                                                 | N/A                                                                                                |