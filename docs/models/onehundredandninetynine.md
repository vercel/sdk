# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: OneHundredAndNinetyNine = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 50.97,
  scriptCount: 2768.73,
  connectSrcCount: 4373.33,
  connectSrcOriginCount: 3864.85,
  headerCount: 7023.68,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `projectId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `deletedCount`                         | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `scriptCount`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `connectSrcCount`                      | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `connectSrcOriginCount`                | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `headerCount`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `connectSrcUserNormalizationRuleCount` | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `connectSrcNormalizationRulesCleared`  | *boolean*                              | :heavy_minus_sign:                     | N/A                                    |