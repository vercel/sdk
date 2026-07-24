# AiGatewayQuota

Optional AI Gateway quota configuration for the API key.

## Example Usage

```typescript
import { AiGatewayQuota } from "@vercel/sdk/models/createapikeysop.js";

let value: AiGatewayQuota = {
  limitAmount: 8922.04,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `limitAmount`                                                                 | *number*                                                                      | :heavy_check_mark:                                                            | The quota limit amount.                                                       |
| `includeByokInQuota`                                                          | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether to include BYOK (Bring Your Own Key) usage in the quota.              |
| `refreshPeriod`                                                               | [models.CreateApiKeysRefreshPeriod](../models/createapikeysrefreshperiod.md)  | :heavy_minus_sign:                                                            | How often the quota refreshes.                                                |
| `alertThresholds`                                                             | *number*[]                                                                    | :heavy_minus_sign:                                                            | Spend percentages (a subset of [50, 75, 100]) at which to send a spend alert. |