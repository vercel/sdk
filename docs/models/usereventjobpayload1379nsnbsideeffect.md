# UserEventJobPayload1379NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload1379NsnbSideEffect } from "@vercel/sdk/models/usereventjobpayload137gitcomments.js";

let value: UserEventJobPayload1379NsnbSideEffect = {
  action: "auto-approved-member",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `action`                                                                           | [models.UserEventJobPayload1379Action](../models/usereventjobpayload1379action.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitUserLogin`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |