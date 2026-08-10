# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/one1.js";

let value: TwoHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 149.76,
  scriptCount: 5717.41,
  connectSrcCount: 227.09,
  connectSrcOriginCount: 4390.01,
  headerCount: 9964.01,
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