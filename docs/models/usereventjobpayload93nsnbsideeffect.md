# UserEventJobPayload93NsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayload93NsnbSideEffect } from "@vercel/sdk/models/usereventpayload90project.js";

let value: UserEventJobPayload93NsnbSideEffect = {
  action: "auto-approved-member",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `action`                                                                         | [models.UserEventJobPayload938Action](../models/usereventjobpayload938action.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `gitUserLogin`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |