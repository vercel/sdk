# UserEventJobPayloadNsnbSideEffect

Since March 2026 Records a successful NSNB auto-add result so later GitHub PR comments can deterministically explain why this SHA was allowed to deploy.

## Example Usage

```typescript
import { UserEventJobPayloadNsnbSideEffect } from "@vercel/sdk/models/usereventjobpayload965provider.js";

let value: UserEventJobPayloadNsnbSideEffect = {
  action: "auto-approved-pending-invite",
  gitUserLogin: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | [models.UserEventJobPayload96Action](../models/usereventjobpayload96action.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `gitUserLogin`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |