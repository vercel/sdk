# GetProjectOidcProviders

## Example Usage

```typescript
import { GetProjectOidcProviders } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectOidcProviders = {
  to: {
    preset: "all-custom",
  },
  claims: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `to`                       | *models.GetProjectTo*      | :heavy_check_mark:         | N/A                        |
| `label`                    | *string*                   | :heavy_minus_sign:         | N/A                        |
| `claims`                   | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |