# GetStorageStoresByIdDeployments

## Example Usage

```typescript
import { GetStorageStoresByIdDeployments } from "@vercel/sdk/models/getstoragestoresbyidop.js";

let value: GetStorageStoresByIdDeployments = {
  required: true,
  actions: [
    {
      slug: "<value>",
      environments: [],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `required`                                                                       | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `actions`                                                                        | [models.GetStorageStoresByIdActions](../models/getstoragestoresbyidactions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |