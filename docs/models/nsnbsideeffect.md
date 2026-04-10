# NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { NsnbSideEffect } from "@vercel/sdk/models/payloadoldteam.js";

let value: NsnbSideEffect = {
  action: "auto-approved-pending-invite",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `action`                                   | [models.JobAction](../models/jobaction.md) | :heavy_check_mark:                         | N/A                                        |
| `gitUserLogin`                             | *string*                                   | :heavy_check_mark:                         | N/A                                        |