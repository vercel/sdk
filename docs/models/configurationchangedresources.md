# ConfigurationChangedResources

Resources that were changed as part of this intent. Tracks all logical changes including the primary change and any side effects.

## Example Usage

```typescript
import { ConfigurationChangedResources } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationChangedResources = {
  productAlias: "<value>",
  productId: "<id>",
  quantity: 3581.92,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `productAlias`                                                         | *string*                                                               | :heavy_check_mark:                                                     | The alias of the product that was changed.                             |
| `productId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The ID of the product that was changed.                                |
| `quantity`                                                             | *number*                                                               | :heavy_check_mark:                                                     | The resulting quantity after this change.                              |
| `addedResourceIds`                                                     | *string*[]                                                             | :heavy_minus_sign:                                                     | Resource IDs that were added.                                          |
| `effectiveAt`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | When this resource change should take effect for downstream consumers. |
| `removedResourceIds`                                                   | *string*[]                                                             | :heavy_minus_sign:                                                     | Resource IDs that were removed.                                        |
| `resourceIds`                                                          | *string*[]                                                             | :heavy_minus_sign:                                                     | The full set of resource IDs after the change.                         |