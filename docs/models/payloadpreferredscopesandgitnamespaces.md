# PayloadPreferredScopesAndGitNamespaces

## Example Usage

```typescript
import { PayloadPreferredScopesAndGitNamespaces } from "@vercel/sdk/models/userevent.js";

let value: PayloadPreferredScopesAndGitNamespaces = {
  scopeId: "<id>",
  gitNamespaceId: 6037.83,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `scopeId`                      | *string*                       | :heavy_check_mark:             | N/A                            |
| `gitNamespaceId`               | *models.PayloadGitNamespaceId* | :heavy_check_mark:             | N/A                            |