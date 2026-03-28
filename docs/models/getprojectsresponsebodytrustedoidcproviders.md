# GetProjectsResponseBodyTrustedOidcProviders

## Example Usage

```typescript
import { GetProjectsResponseBodyTrustedOidcProviders } from "@vercel/sdk/models/getprojectsblockhistoryprojectsresponse200applicationjsonroute.js";

let value: GetProjectsResponseBodyTrustedOidcProviders = {
  projects: {
    "key": {
      environments: [
        "<value 1>",
      ],
    },
  },
  providers: {
    "key": {
      claims: {},
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `projects`                                                                                                                             | Record<string, [models.GetProjectsResponseBodyProjectsResponseProjects](../models/getprojectsresponsebodyprojectsresponseprojects.md)> | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `providers`                                                                                                                            | Record<string, [models.GetProjectsResponseBodyProviders](../models/getprojectsresponsebodyproviders.md)>                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |