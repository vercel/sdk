# UploadProjectAvatarOidcProviders

## Example Usage

```typescript
import { UploadProjectAvatarOidcProviders } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarOidcProviders = {
  to: {
    preset: "all-custom",
  },
  claims: {},
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `to`                           | *models.UploadProjectAvatarTo* | :heavy_check_mark:             | N/A                            |
| `label`                        | *string*                       | :heavy_minus_sign:             | N/A                            |
| `claims`                       | Record<string, *string*[]>     | :heavy_check_mark:             | N/A                            |