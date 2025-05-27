# GetAliasMicrofrontends

The microfrontends for the alias including the routing configuration

## Example Usage

```typescript
import { GetAliasMicrofrontends } from "@vercel/sdk/models/getaliasop.js";

let value: GetAliasMicrofrontends = {
  defaultApp: {
    projectId: "<id>",
  },
  applications: {
    "key": {
      fallbackHost: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `defaultApp`                                                                                                    | [models.DefaultApp](../models/defaultapp.md)                                                                    | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `applications`                                                                                                  | Record<string, [models.Applications](../models/applications.md)>                                                | :heavy_check_mark:                                                                                              | A mapping from `projectId` to information that should be used if the path is routed to that particular project. |