# ListAliasesMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { ListAliasesMicrofrontends } from "@vercel/sdk/models/listaliasesop.js";

let value: ListAliasesMicrofrontends = {
  applications: [
    {
      fallbackHost: "<value>",
      projectId: "<id>",
    },
  ],
  defaultApp: {
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `applications`                                                     | *models.ListAliasesApplications*                                   | :heavy_check_mark:                                                 | N/A                                                                |
| `defaultApp`                                                       | [models.ListAliasesDefaultApp](../models/listaliasesdefaultapp.md) | :heavy_check_mark:                                                 | N/A                                                                |