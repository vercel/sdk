# CreateFlagFeatureFlagsRequestConditions

## Example Usage

```typescript
import { CreateFlagFeatureFlagsRequestConditions } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagFeatureFlagsRequestConditions = {
  lhs: {
    type: "<value>",
    kind: "<value>",
    attribute: "<value>",
  },
  cmp: "!eq",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `lhs`                                                                                                  | *models.CreateFlagFeatureFlagsRequestLhs*                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `cmp`                                                                                                  | [models.CreateFlagFeatureFlagsRequestCmp](../models/createflagfeatureflagsrequestcmp.md)               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `rhs`                                                                                                  | *models.CreateFlagFeatureFlagsRequestRhs*                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `cmpOptions`                                                                                           | [models.CreateFlagFeatureFlagsRequestCmpOptions](../models/createflagfeatureflagsrequestcmpoptions.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |