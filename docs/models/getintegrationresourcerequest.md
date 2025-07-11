# GetIntegrationResourceRequest

## Example Usage

```typescript
import { GetIntegrationResourceRequest } from "@vercel/sdk/models/getintegrationresourceop.js";

let value: GetIntegrationResourceRequest = {
  integrationConfigurationId: "<id>",
  resourceId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `integrationConfigurationId`                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The ID of the integration configuration (installation) the resource belongs to |
| `resourceId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The ID provided by the 3rd party provider for the given resource               |