# DeleteProjectAvatarOidcProviders

## Example Usage

```typescript
import { DeleteProjectAvatarOidcProviders } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarOidcProviders = {
  to: {
    slugs: [
      "<value 1>",
      "<value 2>",
    ],
  },
  claims: {},
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `to`                           | *models.DeleteProjectAvatarTo* | :heavy_check_mark:             | N/A                            |
| `claims`                       | Record<string, *string*[]>     | :heavy_check_mark:             | N/A                            |
| `label`                        | *string*                       | :heavy_minus_sign:             | N/A                            |