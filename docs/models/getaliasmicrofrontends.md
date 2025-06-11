# GetAliasMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { GetAliasMicrofrontends } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasMicrofrontends = {
  defaultApp: {
    projectId: "<id>",
  },
  applications: [
    {
      projectId: "<id>",
      fallbackHost: "<value>",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `defaultApp`                                                   | [models.DefaultApp](../models/defaultapp.md)                   | :heavy_check_mark:                                             | N/A                                                            |
| `applications`                                                 | [models.Applications](../models/applications.md)[]             | :heavy_check_mark:                                             | A list of the deployment routing information for each project. |