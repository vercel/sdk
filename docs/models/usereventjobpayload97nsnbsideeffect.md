# UserEventJobPayload97NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload97NsnbSideEffect } from "@vercel/sdk/models/fiftyfive.js";

let value: UserEventJobPayload97NsnbSideEffect = {
  action: "auto-approved-pending-invite",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `action`                                                                         | [models.UserEventJobPayload978Action](../models/usereventjobpayload978action.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `gitUserLogin`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |