# TwoHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySeven } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: TwoHundredAndFortySeven = {
  connectSrcCount: 2826.75,
  connectSrcOriginCount: 4157.49,
  deletedCount: 7572.43,
  headerCount: 1804.86,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 4112.89,
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