# TwoHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyTwo } from "@vercel/sdk/models/twohundredandsixtytwo.js";

let value: TwoHundredAndSeventyTwo = {
  connectSrcCount: 6606.87,
  connectSrcOriginCount: 4674.8,
  deletedCount: 5926.66,
  headerCount: 5220.98,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 7495.96,
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