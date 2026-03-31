# UserEventJobNsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobNsnbSideEffect } from "@vercel/sdk/models/forty.js";

let value: UserEventJobNsnbSideEffect = {
  action: "auto-approved-member",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `action`                                                                   | [models.UserEventJobPayloadAction](../models/usereventjobpayloadaction.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `gitUserLogin`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |