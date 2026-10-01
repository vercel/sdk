# TwoHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyThree } from "@vercel/sdk/models/redisoveragereason.js";

let value: TwoHundredAndTwentyThree = {
  billingPlan: "enterprise",
  organizationId: "<id>",
  teamId: "<id>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `billingPlan`                                  | [models.BillingPlan](../models/billingplan.md) | :heavy_check_mark:                             | N/A                                            |
| `organizationId`                               | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `teamId`                                       | *string*                                       | :heavy_check_mark:                             | N/A                                            |