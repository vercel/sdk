# SiftScores

## Example Usage

```typescript
import { SiftScores } from "@vercel/sdk/models/userevent.js";

let value: SiftScores = {
  score: 2175.52,
  reasons: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `score`                                                | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `reasons`                                              | [models.PayloadReasons](../models/payloadreasons.md)[] | :heavy_check_mark:                                     | N/A                                                    |