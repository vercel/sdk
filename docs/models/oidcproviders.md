# OidcProviders

## Example Usage

```typescript
import { OidcProviders } from "@vercel/sdk/models/updateprojectbranchmatcher.js";

let value: OidcProviders = {
  to: {
    preset: "all-custom",
  },
  claims: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `label`                                                                                                                       | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | The label or description of the trusted source                                                                                |
| `to`                                                                                                                          | *models.UpdateProjectTo*                                                                                                      | :heavy_check_mark:                                                                                                            | A set of environments, expressed as explicit slugs, a named preset, or both. At least one of `slugs` or `preset` must be set. |
| `claims`                                                                                                                      | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |