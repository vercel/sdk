# GetProjectsMicrofrontends

## Example Usage

```typescript
import { GetProjectsMicrofrontends } from "@vercel/sdk/models/operations/getprojects.js";

let value: GetProjectsMicrofrontends = {
  updatedAt: 1310.55,
  groupIds: [
    "<value>",
  ],
  enabled: false,
};
```

## Fields

| Field                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                  | Required                                                                                                                                                                                                              | Description                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                                                                                                                                           | *number*                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                    | Timestamp when the microfrontends settings were last updated.                                                                                                                                                         |
| `groupIds`                                                                                                                                                                                                            | *string*[]                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                    | The group IDs of microfrontends that this project belongs to. Each microfrontend project must belong to a microfrontends group that is the set of microfrontends that are used together.                              |
| `enabled`                                                                                                                                                                                                             | *boolean*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                    | Whether microfrontends are enabled for this project.                                                                                                                                                                  |
| `isDefaultApp`                                                                                                                                                                                                        | *boolean*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                    | Whether this project is the default application for the microfrontends group. The default application is the one that is used as the top level shell for the microfrontends group and hosts the other microfrontends. |
| `defaultRoute`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | A path that is used to take screenshots and as the default path in preview links when a domain for this microfrontend is shown in the UI.                                                                             |