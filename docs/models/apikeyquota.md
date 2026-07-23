# APIKeyQuota

AI Gateway quota associated with an API key.

## Example Usage

```typescript
import { APIKeyQuota } from "@vercel/sdk/models/apikeyquota.js";

let value: APIKeyQuota = {
  quotaEntityId: "<id>",
  limitAmount: 9653.02,
  currentSpend: 981.06,
  currentByokSpend: 2789.07,
  includeByokInQuota: true,
  refreshPeriod: "<value>",
  active: true,
  archived: true,
  createdAt: 4170.49,
  updatedAt: 1785.06,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `quotaEntityId`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The unique identifier for the quota.                                                                              |
| `limitAmount`                                                                                                     | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The quota limit amount.                                                                                           |
| `currentSpend`                                                                                                    | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The current amount spent against the quota.                                                                       |
| `currentByokSpend`                                                                                                | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The current BYOK spend (tracked separately).                                                                      |
| `includeByokInQuota`                                                                                              | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | Whether BYOK (Bring Your Own Key) spend counts against the quota.                                                 |
| `refreshPeriod`                                                                                                   | *string*                                                                                                          | :heavy_check_mark:                                                                                                | How often the quota refreshes.                                                                                    |
| `active`                                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | Whether the quota is currently active.                                                                            |
| `archived`                                                                                                        | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | Whether the quota has been archived.                                                                              |
| `alertThresholds`                                                                                                 | *number*[]                                                                                                        | :heavy_minus_sign:                                                                                                | Spend percentages (a subset of [50, 75, 100]) at which to send a spend alert. Empty or undefined disables alerts. |
| `createdAt`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | Timestamp (in milliseconds) of when the quota was created.                                                        |
| `updatedAt`                                                                                                       | *number*                                                                                                          | :heavy_check_mark:                                                                                                | Timestamp (in milliseconds) of when the quota was last updated.                                                   |