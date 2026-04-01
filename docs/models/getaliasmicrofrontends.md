# GetAliasMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { GetAliasMicrofrontends } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasMicrofrontends = {
  defaultApp: {
    projectId: "<id>",
  },
  applications: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `defaultApp`                                                 | [models.GetAliasDefaultApp](../models/getaliasdefaultapp.md) | :heavy_check_mark:                                           | N/A                                                          |
| `applications`                                               | *models.GetAliasApplications*                                | :heavy_check_mark:                                           | N/A                                                          |