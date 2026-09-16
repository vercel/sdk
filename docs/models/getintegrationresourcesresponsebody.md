# GetIntegrationResourcesResponseBody

## Example Usage

```typescript
import { GetIntegrationResourcesResponseBody } from "@vercel/sdk/models/getintegrationresourcesop.js";

let value: GetIntegrationResourcesResponseBody = {
  resources: [
    {
      internalId: "<id>",
      name: "<value>",
      partnerId: "<id>",
      productId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resources`                                                                                | [models.GetIntegrationResourcesResources](../models/getintegrationresourcesresources.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |