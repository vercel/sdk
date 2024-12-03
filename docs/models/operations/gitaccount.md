# GitAccount

## Example Usage

```typescript
import { GitAccount } from "@vercel/sdk/models/operations/searchrepo.js";

let value: GitAccount = {
  provider: "github",
  namespaceId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `provider`                                                                         | [operations.ResponseBodyProvider](../../models/operations/responsebodyprovider.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `namespaceId`                                                                      | *operations.ResponseBodyNamespaceId*                                               | :heavy_check_mark:                                                                 | N/A                                                                                |