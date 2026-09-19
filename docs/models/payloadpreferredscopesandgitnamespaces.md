# PayloadPreferredScopesAndGitNamespaces

## Example Usage

```typescript
import { PayloadPreferredScopesAndGitNamespaces } from "@vercel/sdk/models/target.js";

let value: PayloadPreferredScopesAndGitNamespaces = {
  gitNamespaceId: "<id>",
  scopeId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `gitNamespaceId`               | *models.PayloadGitNamespaceId* | :heavy_check_mark:             | N/A                            |
| `scopeId`                      | *string*                       | :heavy_check_mark:             | N/A                            |