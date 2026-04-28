# CreateProjectOidcProviders

## Example Usage

```typescript
import { CreateProjectOidcProviders } from "@vercel/sdk/models/createprojecttrustedsources.js";

let value: CreateProjectOidcProviders = {
  to: {
    slugs: [
      "<value 1>",
      "<value 2>",
    ],
  },
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `to`                       | *models.CreateProjectTo*   | :heavy_check_mark:         | N/A                        |
| `label`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `claims`                   | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |