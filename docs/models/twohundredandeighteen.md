# TwoHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighteen } from "@vercel/sdk/models/payloaddefault.js";

let value: TwoHundredAndEighteen = {
  connectSrcCount: 2164.06,
  connectSrcOriginCount: 6783.61,
  deletedCount: 534.69,
  headerCount: 1342.21,
  projectId: "<id>",
  projectName: "<value>",
  scriptCount: 9990.01,
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