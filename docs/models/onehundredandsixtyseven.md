# OneHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayloadgituserid.js";

let value: OneHundredAndSixtySeven = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 7901.4,
  scriptCount: 5566.29,
  connectSrcCount: 2558.38,
  connectSrcOriginCount: 9696.38,
  headerCount: 2308.74,
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