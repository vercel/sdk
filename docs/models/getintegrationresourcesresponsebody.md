# GetIntegrationResourcesResponseBody

## Example Usage

```typescript
import { GetIntegrationResourcesResponseBody } from "@vercel/sdk/models/getintegrationresourcesop.js";

let value: GetIntegrationResourcesResponseBody = {
  resources: [
    {
      partnerId: "<id>",
      internalId: "<id>",
      name: "<value>",
      productId: "<id>",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `resources`                                  | [models.Resources](../models/resources.md)[] | :heavy_check_mark:                           | N/A                                          |