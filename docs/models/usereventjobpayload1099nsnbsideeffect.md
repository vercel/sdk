# UserEventJobPayload1099NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload1099NsnbSideEffect } from "@vercel/sdk/models/usereventjobaction.js";

let value: UserEventJobPayload1099NsnbSideEffect = {
  action: "auto-approved-pending-invite",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `action`                                                                           | [models.UserEventJobPayload1099Action](../models/usereventjobpayload1099action.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitUserLogin`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |