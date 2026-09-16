# GitNamespacesResponseBody

## Example Usage

```typescript
import { GitNamespacesResponseBody } from "@vercel/sdk/models/gitnamespacesop.js";

let value: GitNamespacesResponseBody = {
  id: "<id>",
  ownerType: "<value>",
  provider: "<value>",
  slug: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *models.GitNamespacesId*             | :heavy_check_mark:                   | N/A                                  |
| `installationId`                     | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `isAccessRestricted`                 | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `name`                               | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `ownerType`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `provider`                           | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `requireReauth`                      | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `slug`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `viewer`                             | [models.Viewer](../models/viewer.md) | :heavy_minus_sign:                   | N/A                                  |