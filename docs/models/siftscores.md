# SiftScores

## Example Usage

```typescript
import { SiftScores } from "@vercel/sdk/models/previousrule.js";

let value: SiftScores = {
  reasons: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  score: 4551.1,
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `reasons`                                              | [models.PayloadReasons](../models/payloadreasons.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `score`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |