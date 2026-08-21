# FeatureBlocks

Feature blocks for the user

## Example Usage

```typescript
import { FeatureBlocks } from "@vercel/sdk/models/authuser.js";

let value: FeatureBlocks = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `webAnalytics`                                                                                                                                 | [models.WebAnalytics](../models/webanalytics.md)                                                                                               | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `speedInsightsFree`                                                                                                                            | [models.SpeedInsightsFree](../models/speedinsightsfree.md)                                                                                     | :heavy_minus_sign:                                                                                                                             | Client-facing view of the `speedInsightsFree` ingestion block. The dashboard needs `blockReason` to tell usage pauses apart from admin blocks. |