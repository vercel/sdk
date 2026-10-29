# UserEventJobPayload125NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload125NsnbSideEffect } from "@vercel/sdk/models/data2.js";

let value: UserEventJobPayload125NsnbSideEffect = {
  action: "auto-approved-pending-invite",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `action`                                                                           | [models.UserEventJobPayload1258Action](../models/usereventjobpayload1258action.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitUserLogin`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |