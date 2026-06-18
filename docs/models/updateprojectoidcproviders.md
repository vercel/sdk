# UpdateProjectOidcProviders

## Example Usage

```typescript
import { UpdateProjectOidcProviders } from "@vercel/sdk/models/updateprojectprojectsaction.js";

let value: UpdateProjectOidcProviders = {
  to: {
    preset: "all-custom",
  },
  claims: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `to`                             | *models.UpdateProjectProjectsTo* | :heavy_check_mark:               | N/A                              |
| `label`                          | *string*                         | :heavy_minus_sign:               | N/A                              |
| `claims`                         | Record<string, *string*[]>       | :heavy_check_mark:               | N/A                              |