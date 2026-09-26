# UserEventJobPayload1109NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload1109NsnbSideEffect } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: UserEventJobPayload1109NsnbSideEffect = {
  action: "auto-approved-member",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `action`                                                                           | [models.UserEventJobPayload1109Action](../models/usereventjobpayload1109action.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gitUserLogin`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |