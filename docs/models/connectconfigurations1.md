# ConnectConfigurations1

## Example Usage

```typescript
import { ConnectConfigurations1 } from "@vercel/sdk/models/updateprojectop.js";

let value: ConnectConfigurations1 = {
  envId: "<id>",
  connectConfigurationId: "<id>",
  passive: false,
  buildsEnabled: false,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `envId`                                                                                                                               | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The ID of the environment                                                                                                             |
| `connectConfigurationId`                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The ID of the Secure Compute network                                                                                                  |
| `passive`                                                                                                                             | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | Whether the configuration should be passive, meaning builds will not run there and only passive Serverless Functions will be deployed |
| `buildsEnabled`                                                                                                                       | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | Flag saying if project builds should use Secure Compute                                                                               |