# TwoHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFive } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: TwoHundredAndSeventyFive = {
  connectSrcCount: 3409.73,
  connectSrcOriginCount: 3966.57,
  deletedCount: 5158.72,
  headerCount: 5874.18,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 3015.76,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `connectSrcCount`                      | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `connectSrcNormalizationRulesCleared`  | *boolean*                              | :heavy_minus_sign:                     | N/A                                    |
| `connectSrcOriginCount`                | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `connectSrcUserNormalizationRuleCount` | *number*                               | :heavy_minus_sign:                     | N/A                                    |
| `deletedCount`                         | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `headerCount`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |
| `projectId`                            | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `projectName`                          | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `scriptCount`                          | *number*                               | :heavy_check_mark:                     | N/A                                    |