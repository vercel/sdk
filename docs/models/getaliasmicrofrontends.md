# GetAliasMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { GetAliasMicrofrontends } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasMicrofrontends = {
  applications: [],
  defaultApp: {
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `applications`                                               | *models.GetAliasApplications*                                | :heavy_check_mark:                                           | N/A                                                          |
| `defaultApp`                                                 | [models.GetAliasDefaultApp](../models/getaliasdefaultapp.md) | :heavy_check_mark:                                           | N/A                                                          |