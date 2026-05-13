# UserEventJobPayload76NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload76NsnbSideEffect } from "@vercel/sdk/models/usereventpayload34aftertype.js";

let value: UserEventJobPayload76NsnbSideEffect = {
  action: "auto-approved-pending-invite",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `action`                                                                         | [models.UserEventJobPayload768Action](../models/usereventjobpayload768action.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `gitUserLogin`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |