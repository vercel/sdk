# GetProjectsResponseBodyOidcProviders

## Example Usage

```typescript
import { GetProjectsResponseBodyOidcProviders } from "@vercel/sdk/models/responsebodyresourceconfig.js";

let value: GetProjectsResponseBodyOidcProviders = {
  to: {
    slugs: [],
  },
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `to`                                       | *models.GetProjectsResponseBodyProjectsTo* | :heavy_check_mark:                         | N/A                                        |
| `label`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `claims`                                   | Record<string, *string*[]>                 | :heavy_check_mark:                         | N/A                                        |